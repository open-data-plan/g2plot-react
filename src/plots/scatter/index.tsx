import React, { FC } from 'react'
import { Scatter, ScatterConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type ScatterChartProps = Omit<BaseChartProps, 'chart'> & ScatterConfig

const ScatterChart: FC<ScatterChartProps> = props => {
  return <BaseChart chart={Scatter} {...props} />
}

export default ScatterChart
