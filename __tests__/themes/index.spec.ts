import * as themes from '../../src/themes'

describe('themes', () => {
  test('default theme', () => {
    expect(themes.g2).toBeDefined()
    expect(themes.g2).toStrictEqual({})
  })
})
