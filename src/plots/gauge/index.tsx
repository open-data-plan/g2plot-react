import React, { FC } from 'react'
import { Gauge, GaugeConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type GaugeChartProps = Omit<BaseChartProps, 'chart'> & GaugeConfig

const GaugeChart: FC<GaugeChartProps> = (props) => {
  return <BaseChart chart={Gauge} {...props} />
}

export default GaugeChart
