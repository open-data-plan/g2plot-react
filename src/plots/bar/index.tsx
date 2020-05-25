import React, { forwardRef } from 'react'
import { Bar, BarConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type BarChartProps = Omit<BaseChartProps<BarConfig>, 'chart'> & BarConfig

const BarChart = forwardRef<BasePlot<BarConfig>, BarChartProps>(
  (props, ref) => {
    return <BaseChart chart={Bar} ref={ref} {...props} />
  }
)

export default BarChart
