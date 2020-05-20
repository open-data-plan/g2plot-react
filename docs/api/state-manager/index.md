---
title: StateManagerProvider
group:
  title: StateManager
---

## Use

```js
import { StateManagerProvider, LineChart, PieChart } from '@opd/g2plot-react'

export default () => (
  <StateManagerProvider>
    <LineChart stateManager={{ setState: [], onStateChange: [] }} />
    <PieChart stateManager={{ setState: [], onStateChange: [] }} />
  </StateManagerProvider>
)
```

> see [example](/examples/state-manager) for detail

## Props

- `ref`: access `StateManager` instance

## StateManager

support all `API` defined in [`G2Plot`](https://g2plot.antv.vision/en/docs/manual/advanced/state-and-charts-connetion)
