import React, { useEffect, useRef, useState } from 'react'
import { Block, Flex } from 'vcc-ui'
import SliderNavigation from './SliderNavigation'

interface Props {
  list: RechargeCar[]
  children: JSX.Element[]
}

const Slider = ({ list, children }: Props): React.ReactElement => {
  const [sliderOffset, setSliderOffset] = useState<number>(0)
  const [offset, setOffset] = useState<number>(0)

  const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
    const container = e.currentTarget.clientWidth
    const scrollWidth = e.currentTarget.scrollWidth
    console.log({ container, scrollWidth })
  }

  return (
    <Block
      as="section"
      extend={{
        position: 'relative',
        width: '100%',
        height: '70vh',
        overflow: 'hidden',
      }}
    >
      <ul
        // as="ul"
        style={{
          boxSizing: 'border-box',
          display: 'flex !important',
          position: 'absolute',
          flexDirection: 'row',
          gap: '1rem',
          width: '100%',
          padding: '1rem',
          paddingRight: '2rem',
          overflowX: 'scroll',
          transition: '0.3s ease-out',
        }}
        onScroll={handleScroll}
      >
        {children.map((item, i) => {
          return (
            <Block
              as="li"
              extend={{ minWidth: '80vw' }}
              key={i + Math.random()}
            >
              {item}
            </Block>
          )
        })}
      </ul>
      <SliderNavigation
        sliderOffset={sliderOffset}
        setSliderOffset={setSliderOffset}
        list={list}
      />
    </Block>
  )
}

export default Slider
