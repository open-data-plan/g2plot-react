import React, { forwardRef } from 'react'
import { PercentStackedColumn, PercentStackedColumnConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type PercentStackedColumnChartProps = Omit<
  BaseChartProps<PercentStackedColumnConfig>,
  'chart'
> &
  PercentStackedColumnConfig

const PercentStackedColumnChart = forwardRef<
  HTMLDivElement | null,
  PercentStackedColumnChartProps
>((props, ref) => {
  return <BaseChart chart={PercentStackedColumn} ref={ref} {...props} />
})

export default PercentStackedColumnChart
