import React, { forwardRef } from 'react'
import { Scatter, ScatterConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type ScatterChartProps = Omit<BaseChartProps<ScatterConfig>, 'chart'> &
  ScatterConfig

const ScatterChart = forwardRef<HTMLDivElement | null, ScatterChartProps>(
  (props, ref) => {
    return <BaseChart chart={Scatter} ref={ref} {...props} />
  }
)

export default ScatterChart
