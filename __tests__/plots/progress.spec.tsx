import React from 'react'
import { create } from 'react-test-renderer'
import ProgressChart from '../../src/plots/progress'

describe('ProgressChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<ProgressChart percent={0.8} />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
