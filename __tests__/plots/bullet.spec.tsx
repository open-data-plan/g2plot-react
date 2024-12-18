import { render } from '@testing-library/react';
import React from 'react';
import BulletChart from '../../src/plots/bullet';

describe('BulletChart', () => {
  test('should render without crashed', () => {
    const result = render(
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

    expect(result.container).toMatchSnapshot();
  });
});
