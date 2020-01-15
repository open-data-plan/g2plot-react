import React, { FC } from 'react'
import { TinyLine, TinyLineConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from './base'

export type TinyLineChartProps = Omit<BaseChartProps, 'chart'> & TinyLineConfig

const TinyLineChart: FC<TinyLineChartProps> = props => {
  return <BaseChart chart={TinyLine} {...props} />
}

export default TinyLineChart
