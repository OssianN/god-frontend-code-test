import React, { useState } from 'react'
import Slider from '../Slider'
import RechargeCarCard from './RechargeCarCard'
import FilterCars from './FilterCars'
import { Block } from 'vcc-ui'

interface Props {
  carsList: RechargeCar[]
}

const RechargeCarsList = ({ carsList }: Props): React.ReactElement => {
  const [filteredCars, setFilteredCars] = useState<RechargeCar[] | null>(null)

  const displayedList = filteredCars ? filteredCars : carsList

  return (
    <Block>
      <FilterCars carsList={carsList} setFilteredCars={setFilteredCars} />
      <Slider list={displayedList}>
        {displayedList.map(car => {
          return <RechargeCarCard car={car} key={car.id} />
        })}
      </Slider>
    </Block>
  )
}

export default RechargeCarsList
