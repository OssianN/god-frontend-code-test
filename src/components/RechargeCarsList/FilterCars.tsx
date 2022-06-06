import React, { useEffect, useMemo, useState } from 'react'
import { SelectInput, Block } from 'vcc-ui'

interface Props {
  carsList: RechargeCar[]
  setFilteredCars: Function
}

const FilterCars = ({
  carsList,
  setFilteredCars,
}: Props): React.ReactElement => {
  const [inputValue, setInputValue] = useState<string>('')

  const getBodyTypes = (carsList: RechargeCar[]): string[] => {
    const bodyTypesList: string[] = []
    carsList.forEach(car => {
      if (!bodyTypesList.includes(car.bodyType)) {
        bodyTypesList.push(car.bodyType)
      }
    })
    return bodyTypesList
  }
  const bodyTypes = useMemo(() => getBodyTypes(carsList), [carsList])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    setInputValue(value)
  }

  useEffect(() => {
    const newList = carsList.filter(car => car.bodyType === inputValue)
    setFilteredCars(newList)
  }, [inputValue])

  return (
    <Block extend={{ maxWidth: '600px', margin: '2rem auto' }}>
      <SelectInput
        onChange={handleChange}
        label={'Body Type'}
        description="filter by body type"
      >
        <option>All</option>
        {bodyTypes.map(type => {
          return (
            <option value={type} key={type}>
              {type}
            </option>
          )
        })}
      </SelectInput>
    </Block>
  )
}

export default FilterCars
