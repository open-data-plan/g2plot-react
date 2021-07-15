import React from 'react'
import { create } from 'react-test-renderer'
import CirclePackingChart from '../../src/plots/circle-packing'

describe('CirclePackingChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<CirclePackingChart data={[]} />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
