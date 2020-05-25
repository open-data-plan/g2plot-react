import React, { forwardRef } from 'react'
import {
  StackedColumnLine,
  StackedColumnLineConfig,
  Base as BasePlot,
} from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StackedColumnLineChartProps = Omit<
  BaseChartProps<StackedColumnLineConfig>,
  'chart'
> &
  StackedColumnLineConfig

const StackedColumnLineChart = forwardRef<
  BasePlot<StackedColumnLineConfig>,
  StackedColumnLineChartProps
>((props, ref) => {
  return <BaseChart chart={StackedColumnLine} ref={ref} {...props} />
})

export default StackedColumnLineChart
