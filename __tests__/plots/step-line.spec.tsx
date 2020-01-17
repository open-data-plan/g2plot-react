import React from 'react'
import { create } from 'react-test-renderer'
import StepLineChart from '../../src/plots/step-line'

describe('StepLineChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<StepLineChart data={[]} />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
