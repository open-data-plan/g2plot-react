import React, { forwardRef } from 'react'
import {
  GroupedColumn,
  GroupedColumnConfig,
  Base as BasePlot,
} from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type GroupedColumnChartProps = Omit<
  BaseChartProps<GroupedColumnConfig>,
  'chart'
> &
  GroupedColumnConfig

const GroupedColumnChart = forwardRef<
  BasePlot<GroupedColumnConfig>,
  GroupedColumnChartProps
>((props, ref) => {
  return <BaseChart chart={GroupedColumn} ref={ref} {...props} />
})

export default GroupedColumnChart
