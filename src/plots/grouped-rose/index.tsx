import React, { forwardRef } from 'react'
import { GroupedRose, GroupedRoseConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type GroupedRoseChartProps = Omit<
  BaseChartProps<GroupedRoseConfig>,
  'chart'
> &
  GroupedRoseConfig

const GroupedRoseChart = forwardRef<
  BasePlot<GroupedRoseConfig>,
  GroupedRoseChartProps
>((props, ref) => {
  return <BaseChart chart={GroupedRose} ref={ref} {...props} />
})

export default GroupedRoseChart
