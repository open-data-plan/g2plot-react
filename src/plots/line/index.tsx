import React, { forwardRef } from 'react'
import { Line, LineConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type LineChartProps = Omit<BaseChartProps<LineConfig>, 'chart'> &
  LineConfig

const LineChart = forwardRef<BasePlot<LineConfig>, LineChartProps>(
  (props, ref) => {
    return <BaseChart chart={Line} ref={ref} {...props} />
  }
)

export default LineChart
