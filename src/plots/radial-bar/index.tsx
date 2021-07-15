import React, { forwardRef } from 'react'
import { RadialBar, RadialBarOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RadialBarChartProps = Omit<
  BaseChartProps<RadialBarOptions>,
  'chart' | 'data'
> &
  RadialBarOptions

const RadialBarChart = forwardRef<HTMLDivElement | null, RadialBarChartProps>(
  (props, ref) => {
    return <BaseChart chart={RadialBar} ref={ref} {...props} />
  }
)

export default RadialBarChart
