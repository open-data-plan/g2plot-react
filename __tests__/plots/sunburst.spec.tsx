import React from 'react'
import { create } from 'react-test-renderer'
import SunburstChart from '../../src/plots/sunburst'

describe('SunburstChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<SunburstChart data={[]} />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
