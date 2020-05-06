import React, { FC } from 'react'
import { GroupedColumnLine, GroupedColumnLineConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type GroupedColumnLineChartProps = Omit<BaseChartProps, 'chart'> &
  GroupedColumnLineConfig

const GroupedColumnLineChart: FC<GroupedColumnLineChartProps> = (props) => {
  return <BaseChart chart={GroupedColumnLine} {...props} />
}

export default GroupedColumnLineChart
