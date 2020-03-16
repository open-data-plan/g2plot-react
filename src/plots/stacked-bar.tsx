import React, { FC } from 'react'
import { StackedBar, StackedBarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from './base'

export type StackedBarChartProps = Omit<BaseChartProps, 'chart'> &
  StackedBarConfig

const StackedBarChart: FC<StackedBarChartProps> = props => {
  return <BaseChart chart={StackedBar} {...props} />
}

export default StackedBarChart
