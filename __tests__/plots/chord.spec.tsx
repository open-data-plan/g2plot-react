import React from 'react'
import { create } from 'react-test-renderer'
import ChordChart from '../../src/plots/chord'

describe('ChordChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<ChordChart data={[]} sourceField="x" targetField="y" weightField="z" />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
