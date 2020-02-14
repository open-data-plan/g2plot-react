import React from 'react'
import { create } from 'react-test-renderer'
import AVAChart from '../../src/plots/ava'

describe('AVAChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<AVAChart data={[]} />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
