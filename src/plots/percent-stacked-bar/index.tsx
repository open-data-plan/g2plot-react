import React, { forwardRef } from 'react'
import { PercentStackedBar, PercentStackedBarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type PercentStackedBarChartProps = Omit<
  BaseChartProps<PercentStackedBarConfig>,
  'chart'
> &
  PercentStackedBarConfig

const PercentStackedBarChart = forwardRef<
  HTMLDivElement | null,
  PercentStackedBarChartProps
>((props, ref) => {
  return <BaseChart chart={PercentStackedBar} ref={ref} {...props} />
})

export default PercentStackedBarChart
