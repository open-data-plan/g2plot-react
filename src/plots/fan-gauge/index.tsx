import React, { forwardRef } from 'react'
import { FanGauge, FanGaugeConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type FanGaugeChartProps = Omit<BaseChartProps<FanGaugeConfig>, 'chart'> &
  FanGaugeConfig

const FanGaugeChart = forwardRef<BasePlot<FanGaugeConfig>, FanGaugeChartProps>(
  (props, ref) => {
    return <BaseChart chart={FanGauge} ref={ref} {...props} />
  }
)

export default FanGaugeChart
