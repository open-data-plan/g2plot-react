import React, { FC } from 'react'
import { Funnel, FunnelConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from './base'

export type FunnelChartProps = Omit<BaseChartProps, 'chart'> & FunnelConfig

const FunnelChart: FC<FunnelChartProps> = props => {
  return <BaseChart chart={Funnel} {...props} />
}

export default FunnelChart
