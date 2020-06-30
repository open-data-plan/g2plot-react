import React, { forwardRef } from 'react'
import { Gauge, GaugeConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type GaugeChartProps = Omit<BaseChartProps<GaugeConfig>, 'chart'> &
  GaugeConfig

const GaugeChart = forwardRef<HTMLDivElement | null, GaugeChartProps>(
  (props, ref) => {
    return <BaseChart chart={Gauge} ref={ref} {...props} />
  }
)

export default GaugeChart
