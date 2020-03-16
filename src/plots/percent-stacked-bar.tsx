import React, { FC } from 'react'
import { PercentStackedBar, PercentStackedBarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps, Plot } from './base'

export type PercentStackedBarChartProps = Omit<BaseChartProps, 'chart'> &
  PercentStackedBarConfig

const PercentStackedBarChart: FC<PercentStackedBarChartProps> = props => {
  return (
    <BaseChart
      chart={PercentStackedBar as Plot<PercentStackedBarConfig>}
      {...props}
    />
  )
}

export default PercentStackedBarChart
