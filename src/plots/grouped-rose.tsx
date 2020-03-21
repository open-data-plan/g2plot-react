import React, { FC } from 'react'
import { GroupedRose, GroupedRoseConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from './base'

export type GroupedRoseChartProps = Omit<BaseChartProps, 'chart'> &
  GroupedRoseConfig

const GroupedRoseChart: FC<GroupedRoseChartProps> = props => {
  return <BaseChart chart={GroupedRose} {...props} />
}

export default GroupedRoseChart
