import React, { forwardRef } from 'react'
import { GroupedRose, GroupedRoseConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type GroupedRoseChartProps = Omit<
  BaseChartProps<GroupedRoseConfig>,
  'chart'
> &
  GroupedRoseConfig

const GroupedRoseChart = forwardRef<
  HTMLDivElement | null,
  GroupedRoseChartProps
>((props, ref) => {
  return <BaseChart chart={GroupedRose} ref={ref} {...props} />
})

export default GroupedRoseChart
