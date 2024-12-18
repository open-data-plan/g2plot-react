import { render } from '@testing-library/react';
import React from 'react';
import ChordChart from '../../src/plots/chord';

const data = [
  { source: '北京', target: '天津', value: 30 },
  { source: '北京', target: '上海', value: 80 },
  { source: '北京', target: '河北', value: 46 },
  { source: '北京', target: '辽宁', value: 49 },
  { source: '北京', target: '黑龙江', value: 69 },
  { source: '北京', target: '吉林', value: 19 },
  { source: '天津', target: '河北', value: 62 },
  { source: '天津', target: '辽宁', value: 82 },
  { source: '天津', target: '上海', value: 16 },
  { source: '上海', target: '黑龙江', value: 16 },
  { source: '河北', target: '黑龙江', value: 76 },
  { source: '河北', target: '内蒙古', value: 24 },
  { source: '内蒙古', target: '北京', value: 32 },
];

describe('ChordChart', () => {
  test('should render without crashed', () => {
    const result = render(
      <ChordChart
        {...{
          data,
          sourceField: 'source',
          targetField: 'target',
          weightField: 'value',
        }}
      />,
    );

    expect(result.container).toMatchSnapshot();
  });
});
