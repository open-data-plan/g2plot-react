import React, { forwardRef } from 'react'
import {
  GroupedColumnLine,
  GroupedColumnLineConfig,
  Base as BasePlot,
} from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type GroupedColumnLineChartProps = Omit<
  BaseChartProps<GroupedColumnLineConfig>,
  'chart'
> &
  GroupedColumnLineConfig

const GroupedColumnLineChart = forwardRef<
  BasePlot<GroupedColumnLineConfig>,
  GroupedColumnLineChartProps
>((props, ref) => {
  return <BaseChart chart={GroupedColumnLine} ref={ref} {...props} />
})

export default GroupedColumnLineChart
