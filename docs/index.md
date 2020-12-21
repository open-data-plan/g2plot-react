---
title: G2Plot React
hero:
  title: G2Plot React
  desc: G2Plot for React
  actions:
    - text: API
      link: /api
    - text: Get Started
      link: /guide/get-started
features:
  - icon: https://gw.alipayobjects.com/zos/antfincdn/SlbIagEvT7/G2plot.svg
    title: G2Plot
    desc: Powered by [G2Plot](https://g2plot.antv.vision)
  - icon: data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K
    title: React
    desc: Born for React
  - icon: https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png
    title: Type Strong
    desc: Native support for TypeScript
---

## Installation

```bash
npm install @opd/g2plot-react
```

## Usage

```js
import { LineChart } from '@opd/g2plot-react'
```

## Examples

```tsx | inline
import React, { useCallback } from 'react'
import { LineChart, ColumnChart, PieChart, BarChart } from '@opd/g2plot-react'

const config = {
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

const pieConfig = {
  height: 350,
  autoFit: true,
  padding: 'auto',
  radius: 1,
  data: [
    {
      type: 'A',
      value: 27,
    },
    {
      type: 'B',
      value: 25,
    },
    {
      type: 'C',
      value: 18,
    },
    {
      type: 'D',
      value: 15,
    },
    {
      type: 'E',
      value: 10,
    },
    {
      type: 'Others',
      value: 5,
    },
  ],
  angleField: 'value',
  colorField: 'type',
  label: {
    visible: true,
    type: 'inner',
  },
  legend: {
    visible: false,
  },
}

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      <LineChart
        style={{
          width: '48%',
          minWidth: 350,
          marginTop: 32,
        }}
        {...config}
      />
      <ColumnChart
        style={{
          width: '48%',
          minWidth: 350,
          marginTop: 32,
        }}
        {...config}
      />
      <BarChart
        style={{
          width: '48%',
          minWidth: 350,
          marginTop: 32,
        }}
        {...config}
        xField="value"
        yField="year"
      />
      <PieChart
        style={{
          width: '48%',
          minWidth: 350,
          marginTop: 32,
        }}
        {...pieConfig}
      />
    </div>
  )
}
```

## Links

- [`G2Plot`](https://g2plot.antv.vision/)
- [`Vue Version`](https://github.com/open-data-plan/g2plot-vue)
