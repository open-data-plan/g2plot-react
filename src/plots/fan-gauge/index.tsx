import React, { FC } from 'react'
import { FanGauge, FanGaugeConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type FanGaugeChartProps = Omit<BaseChartProps, 'chart'> & FanGaugeConfig

const FanGaugeChart: FC<FanGaugeChartProps> = props => {
  return <BaseChart chart={FanGauge} {...props} />
}

export default FanGaugeChart
