import React from 'react'
import Image from 'next/image'
import chevronCircled from '../../../docs/chevron-circled.svg'
import { Click, Flex } from 'vcc-ui'

interface Props {
  sliderOffset: number
  setSliderOffset: Function
  list: RechargeCar[]
}

const SliderNavigation = ({
  sliderOffset,
  setSliderOffset,
  list,
}: Props): React.ReactElement => {
  const handleScrollRight = (): void => {
    sliderOffset === list.length / 4
      ? setSliderOffset(0)
      : setSliderOffset((prev: number) => prev + 1)
  }

  const handleScrollLeft = (): void => {
    sliderOffset === 0
      ? setSliderOffset(list.length / 4)
      : setSliderOffset((prev: number) => prev - 1)
  }

  return (
    <Flex
      as="nav"
      extend={{
        position: 'absolute',
        bottom: '1rem',
        right: '1rem',
        width: 'fit-content',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '0.5rem',
      }}
    >
      <Click
        extend={{
          width: '3rem',
          height: '3rem',
          borderRadius: '100px',
          transition: '0.3s',
        }}
        onClick={handleScrollRight}
      >
        <Image
          src={chevronCircled}
          width="800"
          height="600"
          alt={'nav button'}
          style={{ transform: 'rotate(180deg)' }}
        />
      </Click>

      <Click
        extend={{
          width: '3rem',
          height: '3rem',
          borderRadius: '100px',
          border: '1px solid #141414',
          transition: '0.3s',
        }}
        onClick={handleScrollLeft}
      >
        <Image
          src={chevronCircled}
          width="800"
          height="600"
          alt={'nav button'}
        />
      </Click>
    </Flex>
  )
}

export default SliderNavigation
