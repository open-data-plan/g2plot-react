import React from 'react'
import { create } from 'react-test-renderer'
import OverlappedComboChart from '../../src/plots/overlapped-combo'

describe('OverlappedComboChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<OverlappedComboChart layers={[]} />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
