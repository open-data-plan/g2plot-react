---
title: API
nav:
  title: API
---

## Configurations

All configurations defined in `G2Plot` can be used as `React` `props` in `G2Plot React`

For example

```ts
import React from 'react'
import { LineChart } from '@opd/g2plot-react'

export default () => <LineChart xField="x" height={400} forceFit />
```

view `G2Plot` [docs](https://g2plot.antv.vision/en/docs/manual/introduction)

## Lifecycle

- `OnMount`: `(chart: Plot) => void`
  triggered after chart render
