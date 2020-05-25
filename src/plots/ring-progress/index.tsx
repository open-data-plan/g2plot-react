import React, { forwardRef } from 'react'
import {
  RingProgress,
  RingProgressConfig,
  Base as BasePlot,
} from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RingProgressChartProps = Omit<
  BaseChartProps<RingProgressConfig>,
  'chart'
> &
  RingProgressConfig

const RingProgressChart = forwardRef<
  BasePlot<RingProgressConfig>,
  RingProgressChartProps
>((props, ref) => {
  return <BaseChart chart={RingProgress} ref={ref} {...props} />
})

export default RingProgressChart
