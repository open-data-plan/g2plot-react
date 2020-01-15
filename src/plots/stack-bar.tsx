import React, { FC } from 'react'
import { StackBar, StackBarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from './base'

export type StackBarChartProps = Omit<BaseChartProps, 'chart'> & StackBarConfig

const StackBarChart: FC<StackBarChartProps> = props => {
  return <BaseChart chart={StackBar} {...props} />
}

export default StackBarChart
