import React from 'react'
import { ColumnLineChart } from '@opd/g2plot-react'
import { ColumnLineConfig } from '@antv/g2plot'

const uvBillData = [
  { time: '2019-03', uv: 350, type: 'uv' },
  { time: '2019-04', uv: 900, type: 'uv' },
  { time: '2019-05', uv: 300, type: 'uv' },
  { time: '2019-06', uv: 450, type: 'uv' },
  { time: '2019-07', uv: 470, type: 'uv' },
  { time: '2019-03', bill: 220, type: 'bill' },
  { time: '2019-04', bill: 300, type: 'bill' },
  { time: '2019-05', bill: 250, type: 'bill' },
  { time: '2019-06', bill: 220, type: 'bill' },
  { time: '2019-07', bill: 362, type: 'bill' },
]

const transformData = [
  { time: '2019-03', transform: 800 },
  { time: '2019-04', transform: 600 },
  { time: '2019-05', transform: 400 },
  { time: '2019-06', transform: 380 },
  { time: '2019-07', transform: 220 },
]

const config: ColumnLineConfig = {
  data: [uvBillData, transformData],
  xField: 'time',
  yField: ['uv', 'transform'],
}

export default () => <ColumnLineChart {...config} />
