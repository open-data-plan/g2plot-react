import React, { FC } from 'react'
import { Line, LineConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from './base'

export type LineChartProps = Omit<BaseChartProps, 'chart'> & LineConfig

const LineChart: FC<LineChartProps> = props => {
  return <BaseChart chart={Line} {...props} />
}

export default LineChart
