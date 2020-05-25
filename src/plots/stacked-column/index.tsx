import React, { forwardRef } from 'react'
import {
  StackedColumn,
  StackedColumnConfig,
  Base as BasePlot,
} from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StackedColumnChartProps = Omit<
  BaseChartProps<StackedColumnConfig>,
  'chart'
> &
  StackedColumnConfig

const StackedColumnChart = forwardRef<
  BasePlot<StackedColumnConfig>,
  StackedColumnChartProps
>((props, ref) => {
  return <BaseChart chart={StackedColumn} ref={ref} {...props} />
})

export default StackedColumnChart
