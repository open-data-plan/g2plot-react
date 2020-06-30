import React, { forwardRef } from 'react'
import { MeterGauge, MeterGaugeConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type MeterGaugeChartProps = Omit<
  BaseChartProps<MeterGaugeConfig>,
  'chart'
> &
  MeterGaugeConfig

const MeterGaugeChart = forwardRef<HTMLDivElement | null, MeterGaugeChartProps>(
  (props, ref) => {
    return <BaseChart chart={MeterGauge} ref={ref} {...props} />
  }
)

export default MeterGaugeChart
