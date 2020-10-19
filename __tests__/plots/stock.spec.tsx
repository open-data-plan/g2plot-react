import React from 'react'
import { create } from 'react-test-renderer'
import StockChart from '../../src/plots/stock'

describe('StockChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <StockChart data={[]} xField="x" yField={['a', 'b', 'c', 'd']} />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
