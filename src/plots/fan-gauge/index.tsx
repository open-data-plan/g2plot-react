import React, { forwardRef } from 'react'
import { FanGauge, FanGaugeConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type FanGaugeChartProps = Omit<BaseChartProps<FanGaugeConfig>, 'chart'> &
  FanGaugeConfig

const FanGaugeChart = forwardRef<HTMLDivElement | null, FanGaugeChartProps>(
  (props, ref) => {
    return <BaseChart chart={FanGauge} ref={ref} {...props} />
  }
)

export default FanGaugeChart
