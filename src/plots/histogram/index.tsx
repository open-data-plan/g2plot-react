import React, { FC } from 'react'
import { Histogram, HistogramConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type HistogramChartProps = Omit<BaseChartProps, 'chart'> &
  HistogramConfig

const HistogramChart: FC<HistogramChartProps> = (props) => {
  return <BaseChart chart={Histogram} {...props} />
}

export default HistogramChart
