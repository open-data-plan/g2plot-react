---
title: Get Started
---

## Install

Install package in your work directory

```bash
npm install @opd/g2plot-react
```

## Import

Import a chart in your `React` Component

```ts
import { LineChart } from '@opd/g2plot-react'
```

## Config

Config chart based on `G2Plot` [docs](https://g2plot.antv.vision/en/docs/manual/introduction)

```ts
const config = {
  height: 400,
  title: {
    visible: true,
    text: 'LineChart',
  },
  description: {
    visible: true,
    text: 'This is Description',
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
```

## Render

```tsx
import React, { useCallback } from 'react'
import { LineChart } from '@opd/g2plot-react'

const config = {
  height: 400,
  title: {
    visible: true,
    text: 'LineChart',
  },
  description: {
    visible: true,
    text: 'This is Description',
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
  const getChart = useCallback((chart) => {
    console.log(chart)
  }, [])
  const getContainer = useCallback((container) => {
    console.log(container)
  }, [])
  return <LineChart {...config} ref={getContainer} chartRef={getChart} />
}
```
