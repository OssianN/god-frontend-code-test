import React, { useEffect } from 'react'
import { Click, Flex } from 'vcc-ui'

interface Props {
  sliderOffset: number
  list: RechargeCar[]
  handleScroll: Function
}

const SliderNavigation = ({
  sliderOffset,
  list,
  handleScroll,
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
      {list.map(({ id }, i) => {
        const poistion = (sliderOffset + 8 * i) / (window?.innerWidth * 0.8)

        return (
          <Click
            extend={{
              width: '.75rem',
              height: '.75rem',
              borderRadius: '100px',
              transition: '0.3s',
              background: Math.floor(poistion) === i ? '#141414' : '#ebebeb',
            }}
            onClick={() => handleScroll(i)}
            key={id}
          ></Click>
        )
      })}
    </Flex>
  )
}

export default SliderNavigation
