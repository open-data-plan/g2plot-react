import React, { FC } from 'react'
import { GroupedBar, GroupedBarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type GroupedBarChartProps = Omit<BaseChartProps, 'chart'> &
  GroupedBarConfig

const GroupedBarChart: FC<GroupedBarChartProps> = (props) => {
  return <BaseChart chart={GroupedBar} {...props} />
}

export default GroupedBarChart
