import React, { FC } from 'react'
import { StackedArea, StackedAreaConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from './base'

export type StackedAreaChartProps = Omit<BaseChartProps, 'chart'> &
  StackedAreaConfig

const StackedAreaChart: FC<StackedAreaChartProps> = props => {
  return <BaseChart chart={StackedArea} {...props} />
}

export default StackedAreaChart
