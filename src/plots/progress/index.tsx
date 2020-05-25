import React, { forwardRef } from 'react'
import { Progress, ProgressConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type ProgressChartProps = Omit<BaseChartProps<ProgressConfig>, 'chart'> &
  ProgressConfig

const ProgressChart = forwardRef<BasePlot<ProgressConfig>, ProgressChartProps>(
  (props, ref) => {
    return <BaseChart chart={Progress} ref={ref} {...props} />
  }
)

export default ProgressChart
