import React from 'react'
import { create } from 'react-test-renderer'
import VennChart from '../../src/plots/venn'

describe('VennChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<VennChart data={[]} />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
