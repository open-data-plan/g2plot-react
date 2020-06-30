import React, { forwardRef } from 'react'
import { StackedArea, StackedAreaConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StackedAreaChartProps = Omit<
  BaseChartProps<StackedAreaConfig>,
  'chart'
> &
  StackedAreaConfig

const StackedAreaChart = forwardRef<
  HTMLDivElement | null,
  StackedAreaChartProps
>((props, ref) => {
  return <BaseChart chart={StackedArea} ref={ref} {...props} />
})

export default StackedAreaChart
