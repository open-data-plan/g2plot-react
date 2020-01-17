import React from 'react'
import { create } from 'react-test-renderer'
import ScatterChart from '../../src/plots/scatter'

describe('ScatterChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<ScatterChart data={[]} />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
