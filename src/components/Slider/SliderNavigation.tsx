import React from 'react'
import { Click, Flex } from 'vcc-ui'

interface Props {
  sliderOffset: number
  setSliderOffset: React.Dispatch<React.SetStateAction<number>>
  list: RechargeCar[]
}

const SliderNavigation = ({
  sliderOffset,
  setSliderOffset,
  list,
}: Props): React.ReactElement => {
  return (
    <Flex
      as="nav"
      extend={{
        position: 'absolute',
        bottom: '1rem',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        gap: '0.5rem',
      }}
    >
      {list.map((_, i) => {
        return (
          <Click
            extend={{
              width: '.75rem',
              height: '.75rem',
              borderRadius: '100px',
              background:
                Math.floor(sliderOffset / (window.innerWidth * 0.75)) === i
                  ? '#141414'
                  : '#ebebeb',
            }}
            onClick={() => setSliderOffset(i)}
            key={i + Math.random()}
          ></Click>
        )
      })}
    </Flex>
  )
}

export default SliderNavigation
