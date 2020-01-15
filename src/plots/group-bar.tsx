import React, { FC } from 'react'
import { GroupBar, GroupBarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from './base'

export type GroupBarChartProps = Omit<BaseChartProps, 'chart'> & GroupBarConfig

const GroupBarChart: FC<GroupBarChartProps> = props => {
  return <BaseChart chart={GroupBar} {...props} />
}

export default GroupBarChart
