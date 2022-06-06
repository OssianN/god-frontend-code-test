import {
  calculateNextPage,
  calculatePreviousPage,
} from './DesktopSliderNavigation'
const mockList = [
  {
    id: 'xc90-recharge',
    modelName: 'XC90 Recharge',
    bodyType: 'suv',
    modelType: 'plug-in hybrid',
    imageUrl: '/images/xc90_recharge.jpg',
  },
  {
    id: 'xc60-recharge',
    modelName: 'XC60 Recharge',
    bodyType: 'suv',
    modelType: 'plug-in hybrid',
    imageUrl: '/images/xc60_recharge.jpg',
  },
  {
    id: 'xc40-recharge',
    modelName: 'XC40 Recharge',
    bodyType: 'suv',
    modelType: 'plug-in hybrid',
    imageUrl: '/images/xc40_recharge.jpg',
  },
  {
    id: 'xc40-bev',
    modelName: 'XC40 Recharge',
    bodyType: 'suv',
    modelType: 'pure electric',
    imageUrl: '/images/xc40_bev.jpg',
  },
  {
    id: 'v90-recharge',
    modelName: 'V90 Recharge',
    bodyType: 'estate',
    modelType: 'plug-in hybrid',
    imageUrl: '/images/v90_recharge.jpg',
  },
  {
    id: 'v60-recharge',
    modelName: 'V60 Recharge',
    bodyType: 'estate',
    modelType: 'plug-in hybrid',
    imageUrl: '/images/v60_recharge.jpg',
  },
  {
    id: 's90-recharge',
    modelName: 'S90 Recharge',
    bodyType: 'sedan',
    modelType: 'plug-in hybrid',
    imageUrl: '/images/s90_recharge.jpg',
  },
  {
    id: 's60-recharge',
    modelName: 'S60 Recharge',
    bodyType: 'sedan',
    modelType: 'plug-in hybrid',
    imageUrl: '/images/s60_recharge.jpg',
  },
]

describe('1.0 next page function', () => {
  test('1.1 returns next page when on first page', () => {
    const result = calculateNextPage(0, mockList)
    expect(result).toBe(1)
  })

  test('1.2 returns fist page when on last page', () => {
    const result = calculateNextPage(1, mockList)
    expect(result).toBe(0)
  })

  test('1.3 returns half page when list is not divisible by 4', () => {
    const newCar = {
      id: 's60-recharge2',
      modelName: 'S60 Recharge',
      bodyType: 'sedan',
      modelType: 'plug-in hybrid',
      imageUrl: '/images/s60_recharge.jpg',
    }
    const newList = [...mockList, newCar]

    const result = calculateNextPage(1, newList)
    expect(result).toBe(2)
  })
})

describe('1.0 previos page function', () => {
  test('1.1 returns previos page when on last page', () => {
    const result = calculatePreviousPage(1, mockList)
    expect(result).toBe(0)
  })

  test('1.2 returns last page when on first page', () => {
    const result = calculatePreviousPage(0, mockList)
    expect(result).toBe(1)
  })

  test('1.3 returns half page when list is not divisible by 4', () => {
    const newCar = {
      id: 's60-recharge2',
      modelName: 'S60 Recharge',
      bodyType: 'sedan',
      modelType: 'plug-in hybrid',
      imageUrl: '/images/s60_recharge.jpg',
    }
    const newList = [...mockList, newCar]

    const result = calculatePreviousPage(0, newList)
    expect(result).toBe(2)
  })
})
