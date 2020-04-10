import React, { FC } from 'react'
import { PercentStackedColumn, PercentStackedColumnConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps, Plot } from '../../components/base'

export type PercentStackedColumnChartProps = Omit<BaseChartProps, 'chart'> &
  PercentStackedColumnConfig

const PercentStackedColumnChart: FC<PercentStackedColumnChartProps> = (
  props
) => {
  return (
    <BaseChart
      chart={PercentStackedColumn as Plot<PercentStackedColumnConfig>}
      {...props}
    />
  )
}

export default PercentStackedColumnChart
