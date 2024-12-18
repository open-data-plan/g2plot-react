import { render } from '@testing-library/react';
import React from 'react';
import SunburstChart from '../../src/plots/sunburst';

const data = {
  name: '咖啡产地',
  children: [
    {
      name: '非洲',
      value: 4,
      children: [
        {
          continent: '非洲',
          country: '埃塞俄比亚',
          symbol: '🇪🇹',
          area: '耶加雪菲',
          name: '埃塞俄比亚',
          value: 1,
        },
        {
          continent: '非洲',
          country: '肯尼亚',
          symbol: '🇰🇪',
          coffee: '阿拉比加卡豆',
          name: '肯尼亚',
          value: 1,
        },
        {
          continent: '非洲',
          country: '坦桑尼亚',
          symbol: '🇹🇿',
          coffee: '乞力马扎罗咖啡',
          name: '坦桑尼亚',
          value: 1,
        },
        {
          continent: '非洲',
          country: '乌干达',
          symbol: '🇺🇬',
          name: '乌干达',
          value: 1,
        },
      ],
    },
    {
      name: '中南美洲',
      value: 6,
      children: [
        {
          continent: '中南美洲',
          country: '巴西',
          symbol: '🇧🇷',
          name: '巴西',
          value: 1,
        },
        {
          continent: '中南美洲',
          country: '哥伦比亚',
          symbol: '🇨🇴',
          name: '哥伦比亚',
          value: 1,
        },
        {
          continent: '中南美洲',
          country: '牙买加',
          symbol: '🇯🇲',
          name: '牙买加',
          value: 1,
        },
        {
          continent: '中南美洲',
          country: '巴拿马',
          symbol: '🇵🇦',
          name: '巴拿马',
          value: 1,
        },
        {
          continent: '中南美洲',
          country: '危地马拉',
          symbol: '🇬🇹',
          name: '危地马拉',
          value: 1,
        },
        {
          continent: '中南美洲',
          country: '哥斯达黎加',
          symbol: '🇨🇷',
          name: '哥斯达黎加',
          value: 1,
        },
      ],
    },
    {
      name: '亚洲',
      value: 5,
      children: [
        {
          continent: '亚洲',
          country: '印度尼西亚',
          symbol: '🇮🇩',
          area: '苏门答腊',
          coffee: '曼特宁咖啡',
          name: '印度尼西亚',
          value: 1,
        },
        {
          continent: '亚洲',
          country: '印度',
          symbol: '🇮🇳',
          name: '印度',
          value: 1,
        },
        {
          continent: '亚洲',
          country: '越南',
          symbol: '🇻🇳',
          name: '越南',
          value: 1,
        },
        {
          continent: '亚洲',
          country: '也门',
          symbol: '🇾🇪',
          name: '也门',
          value: 1,
        },
        {
          continent: '亚洲',
          country: '中国',
          symbol: '🇨🇳',
          name: '中国',
          value: 1,
        },
      ],
    },
  ],
};

describe('SunburstChart', () => {
  test('should render without crashed', () => {
    const result = render(<SunburstChart data={data} innerRadius={0.3} interactions={[{ type: 'element-active' }]} />);

    expect(result.container).toMatchSnapshot();
  });
});
