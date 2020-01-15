import React, { FC } from 'react'
import { StackArea, StackAreaConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from './base'

export type StackAreaChartProps = Omit<BaseChartProps, 'chart'> &
  StackAreaConfig

const StackAreaChart: FC<StackAreaChartProps> = props => {
  return <BaseChart chart={StackArea} {...props} />
}

export default StackAreaChart
