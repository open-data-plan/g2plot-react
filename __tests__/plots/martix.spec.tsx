import React from 'react'
import { create } from 'react-test-renderer'
import MatrixChart from '../../src/plots/matrix'

describe('MatrixChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <MatrixChart data={[]} colorField="x" legend={{ visible: false }} />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
