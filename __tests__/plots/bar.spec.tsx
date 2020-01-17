import React from 'react'
import { create } from 'react-test-renderer'
import BarChart from '../../src/plots/bar'

describe('BarChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<BarChart data={[]} />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
