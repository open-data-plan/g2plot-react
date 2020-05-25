import React, { forwardRef } from 'react'
import { TinyColumn, TinyColumnConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type TinyColumnChartProps = Omit<
  BaseChartProps<TinyColumnConfig>,
  'chart'
> &
  TinyColumnConfig

const TinyColumnChart = forwardRef<
  BasePlot<TinyColumnConfig>,
  TinyColumnChartProps
>((props, ref) => {
  return <BaseChart chart={TinyColumn} ref={ref} {...props} />
})

export default TinyColumnChart
