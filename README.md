# @opd/g2plot-react

> [G2Plot](https://g2plot.antv.vision/) for React

[![Build Status](https://dev.azure.com/kagawagao/OPD/_apis/build/status/open-data-plan.g2plot-react?branchName=master)](https://dev.azure.com/kagawagao/OPD/_build/latest?definitionId=1&branchName=master)
[![build](https://github.com/open-data-plan/g2plot-react/workflows/build/badge.svg)](https://github.com/open-data-plan/g2plot-react/actions?query=workflow%3Abuild)
[![npm](https://img.shields.io/npm/v/@opd/g2plot-react.svg)](https://www.npmjs.com/package/@opd/g2plot-react)
[![npm](https://img.shields.io/npm/dm/@opd/g2plot-react.svg)](https://www.npmjs.com/package/@opd/g2plot-react)
[![npm](https://img.shields.io/npm/l/@opd/g2plot-react.svg)](https://www.npmjs.com/package/@opd/g2plot-react)
[![codecov](https://codecov.io/gh/open-data-plan/g2plot-react/branch/master/graph/badge.svg)](https://codecov.io/gh/open-data-plan/g2plot-react)

## Install

```
npm install @opd/g2plot-react
```

## Usage

```tsx
import React, { useRef } from 'react'
import { LineChart, LineChartProps } from '@opd/g2plot-react'

const config: LineChartProps = {
  height: 350,
  autoFit: true,
  xField: 'year',
  yField: 'value',
  smooth: true,
  meta: {
    value: {
      max: 15,
    },
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
  const chartRef = useRef()
  return <LineChart {...config} chartRef={chartRef} />
}
```

[![Edit g2plot-react-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/g2plot-react-example-xx3gp?fontsize=14&hidenavigation=1&theme=dark)

## API

All config defined in `G2Plot` [document](https://g2plot.antv.vision/zh/docs/manual/introduction) can be used as `props`

## Develop

```
npm install
npm run build
```
