import React, { forwardRef } from 'react'
import { RangeColumn, RangeColumnConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RangeColumnChartProps = Omit<
  BaseChartProps<RangeColumnConfig>,
  'chart'
> &
  RangeColumnConfig

const RangeColumnChart = forwardRef<
  BasePlot<RangeColumnConfig>,
  RangeColumnChartProps
>((props, ref) => {
  return <BaseChart chart={RangeColumn} ref={ref} {...props} />
})

export default RangeColumnChart
