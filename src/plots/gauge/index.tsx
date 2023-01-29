import { Gauge, GaugeOptions } from '@antv/g2plot'
import { forwardRef } from 'react'
import BaseChart, { BaseChartProps } from '../../components/base'

export type GaugeChartProps = Omit<
  BaseChartProps<GaugeOptions>,
  'chart' | 'data'
> &
  GaugeOptions

const GaugeChart = forwardRef<HTMLDivElement | null, GaugeChartProps>(
  (props, ref) => {
    return <BaseChart chart={Gauge} ref={ref} {...props} />
  }
)

export default GaugeChart
