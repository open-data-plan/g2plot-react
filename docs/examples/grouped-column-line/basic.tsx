import React from 'react'
import { GroupedColumnLineChart } from '@opd/g2plot-react'

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
  { time: '2019-03', count: 800, name: 'a' },
  { time: '2019-04', count: 600, name: 'a' },
  { time: '2019-05', count: 400, name: 'a' },
  { time: '2019-06', count: 380, name: 'a' },
  { time: '2019-07', count: 220, name: 'a' },
  { time: '2019-03', count: 500, name: 'b' },
  { time: '2019-04', count: 300, name: 'b' },
  { time: '2019-05', count: 200, name: 'b' },
  { time: '2019-06', count: 180, name: 'b' },
  { time: '2019-07', count: 320, name: 'b' },
  { time: '2019-03', count: 200, name: 'c' },
  { time: '2019-04', count: 400, name: 'c' },
  { time: '2019-05', count: 300, name: 'c' },
  { time: '2019-06', count: 480, name: 'c' },
  { time: '2019-07', count: 120, name: 'c' },
]

const config = {
  data: [uvBillData, transformData],
  columnGroupField: 'type',
  lineSeriesField: 'name',
  xField: 'time',
  yField: ['value', 'count'],
}

export default () => <GroupedColumnLineChart {...config} />
