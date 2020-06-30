import React, { forwardRef } from 'react'
import { PercentStackedArea, PercentStackedAreaConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type PercentStackedAreaChartProps = Omit<
  BaseChartProps<PercentStackedAreaConfig>,
  'chart'
> &
  PercentStackedAreaConfig

const PercentStackedAreaChart = forwardRef<
  HTMLDivElement | null,
  PercentStackedAreaChartProps
>((props, ref) => {
  return <BaseChart chart={PercentStackedArea} ref={ref} {...props} />
})

export default PercentStackedAreaChart
