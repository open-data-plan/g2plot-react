import React, { FC } from 'react'
import { StackedColumn, StackedColumnConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from './base'

export type StackedColumnChartProps = Omit<BaseChartProps, 'chart'> &
  StackedColumnConfig

const StackedColumnChart: FC<StackedColumnChartProps> = props => {
  return <BaseChart chart={StackedColumn} {...props} />
}

export default StackedColumnChart
