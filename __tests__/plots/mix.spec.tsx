import React from 'react'
import { create } from 'react-test-renderer'
import MixChart from '../../src/plots/mix'

describe('MixChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<MixChart views={[]} />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
