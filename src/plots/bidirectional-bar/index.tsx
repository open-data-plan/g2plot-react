import React, { forwardRef } from 'react'
import { BidirectionalBar, BidirectionalBarOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type BidirectionalBarChartProps = Omit<
  BaseChartProps<BidirectionalBarOptions>,
  'chart' | 'data'
> &
  BidirectionalBarOptions

const BidirectionalBarChart = forwardRef<
  HTMLDivElement | null,
  BidirectionalBarChartProps
>((props, ref) => {
  return <BaseChart chart={BidirectionalBar} ref={ref} {...props} />
})

export default BidirectionalBarChart
