import React from 'react'
import { create } from 'react-test-renderer'
import RingChart from '../../src/plots/ring'

describe('RingChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<RingChart data={[]} angleField="X" />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
