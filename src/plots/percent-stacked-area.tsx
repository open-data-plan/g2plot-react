import React, { FC } from 'react'
import { PercentStackedArea, PercentStackedAreaConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps, Plot } from './base'

export type PercentStackedAreaChartProps = Omit<BaseChartProps, 'chart'> &
  PercentStackedAreaConfig

const PercentStackedAreaChart: FC<PercentStackedAreaChartProps> = props => {
  return (
    <BaseChart
      chart={PercentStackedArea as Plot<PercentStackedAreaConfig>}
      {...props}
    />
  )
}

export default PercentStackedAreaChart
