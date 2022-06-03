import React from 'react'
import Image from 'next/image'
import { Block, Flex, Text, Link } from 'vcc-ui'
import chevronSmall from '../../../docs/chevron-small.svg'

interface Props {
  car: RechargeCar
}

const RechargeCarCard = ({
  car: { id, modelName, bodyType, modelType, imageUrl },
}: Props): React.ReactElement => {
  return (
    <Block id={id}>
      <Text extend={{ fontWeight: '500', color: '#707070' }}>{bodyType}</Text>
      <Text extend={{ fontWeight: '500', fontSize: '1.3rem' }}>
        {modelName}
      </Text>
      <Text extend={{ color: '#707070' }}>{modelType}</Text>
      <Block
        extend={{
          position: 'relative',
          width: '100%',
          margin: '1rem auto',
        }}
      >
        <Image src={imageUrl} width="800" height="600" />
        <Flex
          extend={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '1rem',
            width: '100%',
            marginTop: '1rem',
          }}
        >
          <Link href={`/learn/${id}`}>
            LEARN
            <Block extend={{ display: 'inline-block', marginLeft: '.5rem' }}>
              <Image src={chevronSmall} width="10" height="10" />
            </Block>
          </Link>
          <Link href={`/shop/${id}`}>
            SHOP
            <Block extend={{ display: 'inline-block', marginLeft: '.5rem' }}>
              <Image src={chevronSmall} width="10" height="10" />
            </Block>
          </Link>
        </Flex>
      </Block>
    </Block>
  )
}

export default RechargeCarCard
