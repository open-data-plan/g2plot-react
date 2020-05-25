import React, { forwardRef } from 'react'
import { Gauge, GaugeConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type GaugeChartProps = Omit<BaseChartProps<GaugeConfig>, 'chart'> &
  GaugeConfig

const GaugeChart = forwardRef<BasePlot<GaugeConfig>, GaugeChartProps>(
  (props, ref) => {
    return <BaseChart chart={Gauge} ref={ref} {...props} />
  }
)

export default GaugeChart
