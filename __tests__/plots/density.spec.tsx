import React from 'react'
import { create } from 'react-test-renderer'
import DensityChart from '../../src/plots/density'

describe('DensityChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<DensityChart data={[]} binField="x" />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
