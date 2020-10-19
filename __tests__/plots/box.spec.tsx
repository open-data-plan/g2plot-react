import React from 'react'
import { create } from 'react-test-renderer'
import BoxChart from '../../src/plots/box'

describe('BoxChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<BoxChart data={[]} xField="x" yField="y" />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
