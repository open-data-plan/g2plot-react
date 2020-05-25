---
title: API
nav:
  title: API
---

## Configurations

All configurations defined in `G2Plot` can be used as `props`, and use `ref` can access chart instance

For example

```js
import React from 'react'
import { LineChart } from '@opd/g2plot-react'

export default () => {
  const ref = useRef()
  return <LineChart xField="x" height={400} ref={ref} forceFit />
}
```

view `G2Plot` [docs](https://g2plot.antv.vision/en/docs/manual/introduction)
