import React, { forwardRef } from 'react'
import { RingProgress, RingProgressConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RingProgressChartProps = Omit<
  BaseChartProps<RingProgressConfig>,
  'chart'
> &
  RingProgressConfig

const RingProgressChart = forwardRef<
  HTMLDivElement | null,
  RingProgressChartProps
>((props, ref) => {
  return <BaseChart chart={RingProgress} ref={ref} {...props} />
})

export default RingProgressChart
