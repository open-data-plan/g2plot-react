import React, { forwardRef } from 'react'
import { StackedRose, StackedRoseConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StackedRoseChartProps = Omit<
  BaseChartProps<StackedRoseConfig>,
  'chart'
> &
  StackedRoseConfig

const StackedRoseChart = forwardRef<
  BasePlot<StackedRoseConfig>,
  StackedRoseChartProps
>((props, ref) => {
  return <BaseChart chart={StackedRose} ref={ref} {...props} />
})

export default StackedRoseChart
