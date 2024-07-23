import React from 'react';
import { create } from 'react-test-renderer';
import BulletChart from '../../src/plots/bullet';

describe('BulletChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <BulletChart
        data={[
          {
            targets: [90],
            measures: [0.9],
          },
        ]}
        measureField="x"
        rangeField="y"
        targetField="z"
      />,
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
