import React, { forwardRef } from 'react'
import { Histogram, HistogramConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type HistogramChartProps = Omit<
  BaseChartProps<HistogramConfig>,
  'chart'
> &
  HistogramConfig

const HistogramChart = forwardRef<
  BasePlot<HistogramConfig>,
  HistogramChartProps
>((props, ref) => {
  return <BaseChart chart={Histogram} ref={ref} {...props} />
})

export default HistogramChart
