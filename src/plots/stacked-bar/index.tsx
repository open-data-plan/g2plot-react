import React, { forwardRef } from 'react'
import { StackedBar, StackedBarConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StackedBarChartProps = Omit<
  BaseChartProps<StackedBarConfig>,
  'chart'
> &
  StackedBarConfig

const StackedBarChart = forwardRef<
  BasePlot<StackedBarConfig>,
  StackedBarChartProps
>((props, ref) => {
  return <BaseChart chart={StackedBar} ref={ref} {...props} />
})

export default StackedBarChart
