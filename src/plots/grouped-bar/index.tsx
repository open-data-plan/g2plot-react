import React, { forwardRef } from 'react'
import { GroupedBar, GroupedBarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type GroupedBarChartProps = Omit<
  BaseChartProps<GroupedBarConfig>,
  'chart'
> &
  GroupedBarConfig

const GroupedBarChart = forwardRef<HTMLDivElement | null, GroupedBarChartProps>(
  (props, ref) => {
    return <BaseChart chart={GroupedBar} ref={ref} {...props} />
  }
)

export default GroupedBarChart
