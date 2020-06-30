import React, { forwardRef } from 'react'
import { StackedColumn, StackedColumnConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StackedColumnChartProps = Omit<
  BaseChartProps<StackedColumnConfig>,
  'chart'
> &
  StackedColumnConfig

const StackedColumnChart = forwardRef<
  HTMLDivElement | null,
  StackedColumnChartProps
>((props, ref) => {
  return <BaseChart chart={StackedColumn} ref={ref} {...props} />
})

export default StackedColumnChart
