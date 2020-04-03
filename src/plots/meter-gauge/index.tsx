import React, { FC } from 'react'
import { MeterGauge, MeterGaugeConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type MeterGaugeChartProps = Omit<BaseChartProps, 'chart'> &
  MeterGaugeConfig

const MeterGaugeChart: FC<MeterGaugeChartProps> = props => {
  return <BaseChart chart={MeterGauge} {...props} />
}

export default MeterGaugeChart
