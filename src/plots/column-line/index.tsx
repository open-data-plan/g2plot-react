import React, { forwardRef } from 'react'
import { ColumnLine, ColumnLineConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type ColumnLineChartProps = Omit<
  BaseChartProps<ColumnLineConfig>,
  'chart'
> &
  ColumnLineConfig

const ColumnLineChart = forwardRef<HTMLDivElement | null, ColumnLineChartProps>(
  (props, ref) => {
    return <BaseChart chart={ColumnLine} ref={ref} {...props} />
  }
)

export default ColumnLineChart
