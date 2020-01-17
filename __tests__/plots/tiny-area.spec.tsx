import React from 'react'
import { create } from 'react-test-renderer'
import TinyAreaChart from '../../src/plots/tiny-area'

describe('TinyAreaChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<TinyAreaChart data={[]} />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
