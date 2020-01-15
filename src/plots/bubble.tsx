import React, { FC } from 'react'
import { Bubble, BubbleConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from './base'

export type BubbleChartProps = Omit<BaseChartProps, 'chart'> & BubbleConfig

const BubbleChart: FC<BubbleChartProps> = props => {
  return <BaseChart chart={Bubble} {...props} />
}

export default BubbleChart
