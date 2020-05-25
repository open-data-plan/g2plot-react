import React, { forwardRef } from 'react'
import { Column, ColumnConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type ColumnChartProps = Omit<BaseChartProps<ColumnConfig>, 'chart'> &
  ColumnConfig

const ColumnChart = forwardRef<BasePlot<ColumnConfig>, ColumnChartProps>(
  (props, ref) => {
    return <BaseChart chart={Column} ref={ref} {...props} />
  }
)

export default ColumnChart
