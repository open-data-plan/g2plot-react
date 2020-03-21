import React from 'react'
import { create } from 'react-test-renderer'
import CalendarChart from '../../src/plots/calendar'

describe('CalendarChart', () => {
  test('should render without crashed', () => {
    const renderer = create(<CalendarChart />)

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
