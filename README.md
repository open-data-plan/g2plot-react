# @cisdi/g2plot-react

> [G2Plot](https://g2plot.antv.vision/) for React 🚧

## Progress

- [x] `LineChart`
- [x] `ScatterChart`
- [ ] `ColumnChart`

## Install

```
npm install @cisdi/g2plot-react
```

## Usage

```js
import { LineChart } from '@cisdi/g2plot-react'
```

## Develop

```
npm install
npm run build
```

## API

All config defined in `G2Plot` [document](https://g2plot.antv.vision/zh/docs/manual/introduction) can be used as `props`

### Example

```tsx
import React from 'react'
import { LineChart } from '@cisdi/g2plot-react'
import { LineConfig } from '@antv/g2plot'

const config: LineConfig = {
  height: 400,
  title: {
    visible: true,
    text: '配置折线数据点样式',
  },
  description: {
    visible: true,
    text: '自定义配置趋势线上数据点的样式',
  },
  padding: 'auto',
  forceFit: true,
  xField: 'year',
  yField: 'value',
  label: {
    visible: true,
    type: 'point',
  },
  point: {
    visible: true,
    size: 5,
  },
  xAxis: {
    tickCount: 10,
  },
  data: [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 11 },
  ],
}

export default () => {
  return <LineChart {...config} />
}
```
