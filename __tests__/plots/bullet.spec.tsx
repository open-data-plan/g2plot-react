import React from 'react'
import { create } from 'react-test-renderer'
import BulletChart from '../../src/plots/bullet'

describe('BulletChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <BulletChart
        rangeMax={100}
        data={[
          {
            targets: [90],
            measures: [0.9],
          },
        ]}
      />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
