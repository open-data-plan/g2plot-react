# @opd/g2plot-react

> [G2Plot](https://g2plot.antv.vision/) for React 🚧

[![build](https://github.com/open-data-plan/g2plot-react/workflows/build/badge.svg)](https://github.com/open-data-plan/g2plot-react/actions?query=workflow%3Abuild)
[![npm](https://img.shields.io/npm/v/@opd/g2plot-react.svg)](https://www.npmjs.com/package/@opd/g2plot-react)
[![npm](https://img.shields.io/npm/dm/@opd/g2plot-react.svg)](https://www.npmjs.com/package/@opd/g2plot-react)
[![npm](https://img.shields.io/npm/l/@opd/g2plot-react.svg)](https://www.npmjs.com/package/@opd/g2plot-react)
[![codecov](https://codecov.io/gh/open-data-plan/g2plot-react/branch/master/graph/badge.svg)](https://codecov.io/gh/open-data-plan/g2plot-react)

## Support Chart

- [x] [`LineChart`](https://g2plot.antv.vision/zh/docs/manual/plots/line)
- [x] [`StepLineChart`](https://g2plot.antv.vision/zh/examples/step-line/multiple)
- [x] [`ScatterChart`](https://g2plot.antv.vision/zh/docs/manual/plots/scatter)
- [x] [`ColumnChart`](https://g2plot.antv.vision/zh/docs/manual/plots/column)
- [x] [`StackColumnChart`](https://g2plot.antv.vision/zh/docs/manual/plots/stack-column)
- [x] [`GroupColumnChart`](https://g2plot.antv.vision/zh/docs/manual/plots/group-column)
- [x] [`BarChart`](https://g2plot.antv.vision/zh/docs/manual/plots/bar)
- [x] [`StackBarChart`](https://g2plot.antv.vision/zh/docs/manual/plots/stack-bar)
- [x] [`GroupBarChart`](https://g2plot.antv.vision/zh/docs/manual/plots/group-bar)
- [x] [`AreaChart`](https://g2plot.antv.vision/zh/docs/manual/plots/area)
- [x] [`StackAreaChart`](https://g2plot.antv.vision/zh/docs/manual/plots/stack-area)
- [x] [`BubbleChart`](https://g2plot.antv.vision/zh/docs/manual/plots/bubble)
- [x] [`PieChart`](https://g2plot.antv.vision/zh/docs/manual/plots/pie)
- [x] [`RingChart`](https://g2plot.antv.vision/zh/docs/manual/plots/ring)
- [x] [`RadarChart`](https://g2plot.antv.vision/zh/docs/manual/plots/radar)
- [x] [`GaugeChart`](https://g2plot.antv.vision/zh/docs/manual/plots/gauge)
- [x] [`HeatmapChart`](https://g2plot.antv.vision/zh/docs/manual/plots/heatmap)
- [x] [`MatrixChart`](https://g2plot.antv.vision/zh/docs/manual/plots/matrix)
- [x] [`ProgressChart`](https://g2plot.antv.vision/zh/docs/manual/plots/sparkline-progress)
- [x] [`RingProgressChart`](https://g2plot.antv.vision/zh/docs/manual/plots/sparkline-ring-progress)
- [x] [`TinyLineChart`](https://g2plot.antv.vision/zh/docs/manual/plots/sparkline-line)
- [x] [`TinyAreaChart`](https://g2plot.antv.vision/zh/docs/manual/plots/sparkline-area)
- [x] [`TinyColumnChart`](https://g2plot.antv.vision/zh/docs/manual/plots/sparkline-column)
- [x] [`FunnelChart`](https://g2plot.antv.vision/zh/examples/funnel/basic)
- [x] [`LiquidChart`](https://g2plot.antv.vision/zh/examples/liquid/basic)
- [x] [`OverlappedComboChart`](https://g2plot.antv.vision/zh/examples/combo/basic)

## TODO

- [ ] add themes

## Install

```
npm install @opd/g2plot-react
```

## Usage

```js
import { LineChart } from '@opd/g2plot-react'
```

## Develop

```
npm install
npm run build
```

## API

All config defined in `G2Plot` [document](https://g2plot.antv.vision/zh/docs/manual/introduction) can be used as `props`

Extra Props:

- `onMount`: `(chart: Plot) => void`. triggered after chart render

### Example

```tsx
import React, { useCallback } from 'react'
import { LineChart } from '@opd/g2plot-react'
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
  const handleChartMount = useCallback(chart => {
    console.log(chart)
  }, [])
  return <LineChart {...config} onMount={handleChartMount} />
}
```

## ❓ Why `Scoped`

package named as [`g2plot-react`](https://www.npmjs.com/package/g2plot-react) has been used by others
