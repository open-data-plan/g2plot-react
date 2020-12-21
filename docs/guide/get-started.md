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
```

## Render

```tsx
import React, { useCallback } from 'react'
import { LineChart } from '@opd/g2plot-react'

const config = {
  height: 400,
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
  const getChart = useCallback((chart) => {
    console.log(chart)
  }, [])
  const getContainer = useCallback((container) => {
    console.log(container)
  }, [])
  return <LineChart {...config} ref={getContainer} chartRef={getChart} />
}
```

## Update Data

```tsx
import React, { useCallback, useState } from 'react'
import { LineChart } from '@opd/g2plot-react'

const config = {
  height: 400,
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
  const getChart = useCallback((chart) => {
    console.log(chart)
  }, [])
  const getContainer = useCallback((container) => {
    console.log(container)
  }, [])

  const [data, setData] = useState([
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 11 },
  ])

  const handleBtnClick = useCallback(() => {
    setData((items) => {
      const last = items.pop()

      return items.concat(last, {
        year: (+last.year + 1).toString(),
        value: Math.random() * 10,
      })
    })
  }, [])

  return (
    <div>
      <button onClick={handleBtnClick}>Update Data</button>
      <LineChart
        {...config}
        ref={getContainer}
        chartRef={getChart}
        data={data}
      />
    </div>
  )
}
```

## Update Config

```tsx
import React, { useCallback, useState } from 'react'
import { LineChart } from '@opd/g2plot-react'

const config = {
  height: 400,
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
  const getChart = useCallback((chart) => {
    console.log(chart)
  }, [])
  const getContainer = useCallback((container) => {
    console.log(container)
  }, [])

  const [restConfig, setConfig] = useState({})

  const handleBtnClick = useCallback(() => {
    setConfig((config) => ({
      point: config.point ? undefined : {},
    }))
  }, [])

  return (
    <div>
      <button onClick={handleBtnClick}>Update Config</button>
      <LineChart
        {...config}
        ref={getContainer}
        chartRef={getChart}
        {...restConfig}
      />
    </div>
  )
}
```

## Use Lab Chart

```tsx | pure
import { Lab } from '@antv/g2plot'
import { BaseChart } from '@opd/g2plot'

export default () => <BaseChart chart={Lab.MultiView} data={[]} />
```
