import React, { forwardRef } from 'react'
import { TinyLine, TinyLineConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type TinyLineChartProps = Omit<BaseChartProps<TinyLineConfig>, 'chart'> &
  TinyLineConfig

const TinyLineChart = forwardRef<BasePlot<TinyLineConfig>, TinyLineChartProps>(
  (props, ref) => {
    return <BaseChart chart={TinyLine} ref={ref} {...props} />
  }
)

export default TinyLineChart
