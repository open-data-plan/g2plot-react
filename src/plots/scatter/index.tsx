import React, { forwardRef } from 'react'
import { Scatter, ScatterOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type ScatterChartProps = Omit<
  BaseChartProps<ScatterOptions>,
  'chart' | 'data'
> &
  ScatterOptions

const ScatterChart = forwardRef<HTMLDivElement | null, ScatterChartProps>(
  (props, ref) => {
    return <BaseChart chart={Scatter} ref={ref} {...props} />
  }
)

export default ScatterChart
