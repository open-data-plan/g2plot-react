import React, { FC } from 'react'
import { GroupedColumn, GroupedColumnConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type GroupedColumnChartProps = Omit<BaseChartProps, 'chart'> &
  GroupedColumnConfig

const GroupedColumnChart: FC<GroupedColumnChartProps> = (props) => {
  return <BaseChart chart={GroupedColumn} {...props} />
}

export default GroupedColumnChart
