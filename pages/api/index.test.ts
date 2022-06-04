import { createMocks } from 'node-mocks-http'
import carsApi from './cars'

describe('1.0 returns 200 when fetching cars', () => {
  test('1.1 /api/cars/', () => {
    const { req, res } = createMocks({
      method: 'GET',
    })

    carsApi(req, res)

    expect(res._getStatusCode()).toBe(200)
  })
})
