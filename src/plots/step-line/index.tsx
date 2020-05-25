import React, { forwardRef } from 'react'
import { StepLine, StepLineConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StepLineChartProps = Omit<BaseChartProps<StepLineConfig>, 'chart'> &
  StepLineConfig

const StepLineChart = forwardRef<BasePlot<StepLineConfig>, StepLineChartProps>(
  (props, ref) => {
    return <BaseChart chart={StepLine} ref={ref} {...props} />
  }
)

export default StepLineChart
