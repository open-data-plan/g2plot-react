import React from 'react'
import { LineChart } from '@opd/g2plot-react'
import { LineConfig } from '@antv/g2plot'

const config: LineConfig = {
  title: {
    visible: true,
    text: '曲线折线图',
  },
  description: {
    visible: true,
    text: '用平滑的曲线代替折线。',
  },
  padding: 'auto',
  forceFit: true,
  data: [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ],
  xField: 'year',
  yField: 'value',
  smooth: true,
}

const SmoothLine = () => <LineChart {...config} />

export default SmoothLine
