import { NextApiRequest, NextApiResponse } from 'next'
import carsList from './data/cars.json'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const rechargeCarsList = carsList as RechargeCar[]
    res.status(200).json(rechargeCarsList)
  } catch (err) {
    res.status(500).send(err)
  }
}

export default handler
