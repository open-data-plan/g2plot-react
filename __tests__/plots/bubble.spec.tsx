import React from 'react'
import { create } from 'react-test-renderer'
import BubbleChart from '../../src/plots/bubble'

describe('BubbleChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<BubbleChart data={[]} />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
