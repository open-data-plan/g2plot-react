import { Histogram, HistogramOptions } from '@antv/g2plot'
import { forwardRef } from 'react'
import BaseChart, { BaseChartProps } from '../../components/base'

export type HistogramChartProps = Omit<
  BaseChartProps<HistogramOptions>,
  'chart' | 'data'
> &
  HistogramOptions

const HistogramChart = forwardRef<HTMLDivElement | null, HistogramChartProps>(
  (props, ref) => {
    return <BaseChart chart={Histogram} ref={ref} {...props} />
  }
)

export default HistogramChart
