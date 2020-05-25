import React, { forwardRef } from 'react'
import { StackedArea, StackedAreaConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StackedAreaChartProps = Omit<
  BaseChartProps<StackedAreaConfig>,
  'chart'
> &
  StackedAreaConfig

const StackedAreaChart = forwardRef<
  BasePlot<StackedAreaConfig>,
  StackedAreaChartProps
>((props, ref) => {
  return <BaseChart chart={StackedArea} ref={ref} {...props} />
})

export default StackedAreaChart
