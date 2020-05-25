import React, { forwardRef } from 'react'
import { Scatter, ScatterConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type ScatterChartProps = Omit<BaseChartProps<ScatterConfig>, 'chart'> &
  ScatterConfig

const ScatterChart = forwardRef<BasePlot<ScatterConfig>, ScatterChartProps>(
  (props, ref) => {
    return <BaseChart chart={Scatter} ref={ref} {...props} />
  }
)

export default ScatterChart
