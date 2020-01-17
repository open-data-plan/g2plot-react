import React from 'react'
import { create } from 'react-test-renderer'
import StackColumnChart from '../../src/plots/stack-column'

describe('StackColumnChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<StackColumnChart data={[]} stackField="x" />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
