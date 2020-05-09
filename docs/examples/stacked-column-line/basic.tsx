import React from 'react'
import { StackedColumnLineChart } from '@opd/g2plot-react'
import { StackedColumnLineConfig } from '@antv/g2plot'

const uvBillData = [
  { time: '2019-03', value: 350, type: 'uv' },
  { time: '2019-04', value: 900, type: 'uv' },
  { time: '2019-05', value: 300, type: 'uv' },
  { time: '2019-06', value: 450, type: 'uv' },
  { time: '2019-07', value: 470, type: 'uv' },
  { time: '2019-03', value: 220, type: 'bill' },
  { time: '2019-04', value: 300, type: 'bill' },
  { time: '2019-05', value: 250, type: 'bill' },
  { time: '2019-06', value: 220, type: 'bill' },
  { time: '2019-07', value: 362, type: 'bill' },
]

const transformData = [
  { time: '2019-03', value: 800 },
  { time: '2019-04', value: 600 },
  { time: '2019-05', value: 400 },
  { time: '2019-06', value: 380 },
  { time: '2019-07', value: 220 },
]

const config: StackedColumnLineConfig = {
  data: [uvBillData, transformData],
  columnStackField: 'type',
  xField: 'time',
  yField: ['value', 'value'],
}

export default () => <StackedColumnLineChart {...config} />
