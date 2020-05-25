import React, { forwardRef } from 'react'
import {
  PercentStackedBar,
  PercentStackedBarConfig,
  Base as BasePlot,
} from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type PercentStackedBarChartProps = Omit<
  BaseChartProps<PercentStackedBarConfig>,
  'chart'
> &
  PercentStackedBarConfig

const PercentStackedBarChart = forwardRef<
  BasePlot<PercentStackedBarConfig>,
  PercentStackedBarChartProps
>((props, ref) => {
  return <BaseChart chart={PercentStackedBar} ref={ref} {...props} />
})

export default PercentStackedBarChart
