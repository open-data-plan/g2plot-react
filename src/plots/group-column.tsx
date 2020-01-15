import React, { FC } from 'react'
import { GroupColumn, GroupColumnConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from './base'

export type GroupColumnChartProps = Omit<BaseChartProps, 'chart'> &
  GroupColumnConfig

const GroupColumnChart: FC<GroupColumnChartProps> = props => {
  return <BaseChart chart={GroupColumn} {...props} />
}

export default GroupColumnChart
