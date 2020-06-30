import React, { forwardRef } from 'react'
import { StackedRose, StackedRoseConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StackedRoseChartProps = Omit<
  BaseChartProps<StackedRoseConfig>,
  'chart'
> &
  StackedRoseConfig

const StackedRoseChart = forwardRef<
  HTMLDivElement | null,
  StackedRoseChartProps
>((props, ref) => {
  return <BaseChart chart={StackedRose} ref={ref} {...props} />
})

export default StackedRoseChart
