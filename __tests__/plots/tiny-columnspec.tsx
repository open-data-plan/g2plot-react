import React from 'react'
import { create } from 'react-test-renderer'
import TinyColumnChart from '../../src/plots/tiny-column'

describe('TinyColumnChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<TinyColumnChart data={[]} />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
