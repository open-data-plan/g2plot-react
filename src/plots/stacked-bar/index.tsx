import React, { forwardRef } from 'react'
import { StackedBar, StackedBarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StackedBarChartProps = Omit<
  BaseChartProps<StackedBarConfig>,
  'chart'
> &
  StackedBarConfig

const StackedBarChart = forwardRef<HTMLDivElement | null, StackedBarChartProps>(
  (props, ref) => {
    return <BaseChart chart={StackedBar} ref={ref} {...props} />
  }
)

export default StackedBarChart
