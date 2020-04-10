import React, { FC } from 'react'
import { GroupedBar, GroupedBarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type GroupBarChartProps = Omit<BaseChartProps, 'chart'> &
  GroupedBarConfig

const GroupBarChart: FC<GroupBarChartProps> = (props) => {
  return <BaseChart chart={GroupedBar} {...props} />
}

export default GroupBarChart
