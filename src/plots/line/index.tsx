import React, { forwardRef } from 'react'
import { Line, LineConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type LineChartProps = Omit<BaseChartProps<LineConfig>, 'chart'> &
  LineConfig

const LineChart = forwardRef<HTMLDivElement | null, LineChartProps>(
  (props, ref) => {
    return <BaseChart chart={Line} ref={ref} {...props} />
  }
)

export default LineChart
