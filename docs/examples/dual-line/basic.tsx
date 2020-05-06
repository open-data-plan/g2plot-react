import React from 'react'
import { DualLineChart } from '@opd/g2plot-react'
import { DualLineConfig } from '@antv/g2plot'

const uvBillData = [
  { time: '2019-03', uv: 350, type: 'uv' },
  { time: '2019-04', uv: 900, type: 'uv' },
  { time: '2019-05', uv: 300, type: 'uv' },
  { time: '2019-06', uv: 450, type: 'uv' },
  { time: '2019-07', uv: 470, type: 'uv' },
]

const transformData = [
  { time: '2019-03', transform: 800 },
  { time: '2019-04', transform: 600 },
  { time: '2019-05', transform: 400 },
  { time: '2019-06', transform: 380 },
  { time: '2019-07', transform: 220 },
]

const config: DualLineConfig = {
  data: [uvBillData, transformData],
  xField: 'time',
  yField: ['uv', 'transform'],
  legend: {
    visible: true,
  },
}

export default () => <DualLineChart {...config} />
