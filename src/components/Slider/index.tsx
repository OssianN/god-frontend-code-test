import React, { useEffect, useRef, useState } from 'react'
import { Block, Flex } from 'vcc-ui'
import DesktopSliderNavigation from './DesktopSliderNavigation'
import MobileSliderNavigation from './MobileSliderNavigation'

interface Props {
  list: RechargeCar[]
  children: JSX.Element[]
}

const Slider = ({ list, children }: Props): React.ReactElement => {
  const [sliderOffset, setSliderOffset] = useState<number>(0)
  const [SSR, setSSR] = useState<boolean>(true)
  const listRef = useRef<HTMLUListElement>(null)

  const handleScroll = (targetItem: number) => {
    if (!listRef.current) {
      return
    }
    setSliderOffset(targetItem)

    const gap = 16 * targetItem
    const itemWidth = window.innerWidth * 0.8 * targetItem
    const offset = gap + itemWidth

    listRef.current.scrollLeft = offset
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSSR(false)
    }
  })

  return (
    <>
      {!SSR && (
        <Block
          as="section"
          extend={{
            position: 'relative',
            width: '100%',
            minHeight: 'fit-content',
            paddingBottom: '4rem',
            overflow: 'hidden',
          }}
        >
          <Flex
            as="ul"
            extend={{
              boxSizing: 'border-box',
              display: 'flex !important',
              flexDirection: 'row',
              gap: '1rem',
              width: '100%',
              padding: '1rem',
              paddingRight: '2rem',
              overflowX: 'scroll',
              transition: '0.3s ease-out',

              '@media (min-width: 767px)': {
                overflowX: 'hidden',
                transform: `translateX(${sliderOffset * window.innerWidth * 0.8}px)`,
              },
            }}
            onScroll={(e: React.UIEvent<HTMLElement>) =>
              setSliderOffset(e.currentTarget.scrollLeft)
            }
            ref={listRef}
          >
            {children.map((item, i) => {
              return (
                <Block
                  as="li"
                  extend={{
                    minWidth: '80vw',
                    '@media (min-width: 767px)': {
                      minWidth: window.innerWidth / 4 - 24,
                    },
                  }}
                  key={i}
                >
                  {item}
                </Block>
              )
            })}
          </Flex>
          {window.innerWidth < 767 ? (
            <MobileSliderNavigation
              sliderOffset={sliderOffset}
              list={list}
              handleScroll={handleScroll}
            />
          ) : (
            <DesktopSliderNavigation
              sliderOffset={sliderOffset}
              setSliderOffset={setSliderOffset}
              list={list}
            />
          )}
        </Block>
      )}
    </>
  )
}

export default Slider
