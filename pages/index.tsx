import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { View, Text } from 'vcc-ui'
import RechargeCarList from '../src/components/RechargeCarsList'

const Home = (): React.ReactElement => {
  const [error, setError] = useState<boolean>(false)
  const [rechargeCarsList, setRechargeCarsList] = useState<RechargeCar[]>([])

  useEffect(() => {
    const fetchRechargeCars = async () => {
      try {
        const { data } = await axios.get<RechargeCar[]>('/api/cars')
        setRechargeCarsList(data)
      } catch (err) {
        setError(true)
      }
    }

    fetchRechargeCars()

    return () => {}
  }, [])

  if (error) {
    return (
      <View>
        <Text>
          Sorry, something went wrong when trying to display our latest recharge
          cars. Please try again.
        </Text>
      </View>
    )
  }

  return (
    <View>
      <RechargeCarList carsList={rechargeCarsList} />
    </View>
  )
}

export default Home
