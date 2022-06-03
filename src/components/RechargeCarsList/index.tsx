import React from 'react'
import Slider from '../Slider'
import RechargeCarCard from './RechargeCarCard'

interface Props {
  carsList: RechargeCar[]
}

const RechargeCarsList = ({ carsList }: Props): React.ReactElement => {
  return (
    <Slider list={carsList}>
      {carsList.map(car => {
        return <RechargeCarCard car={car} key={car.id} />
      })}
    </Slider>
  )
}

export default RechargeCarsList
