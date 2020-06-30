import React, { forwardRef } from 'react'
import { StepLine, StepLineConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StepLineChartProps = Omit<BaseChartProps<StepLineConfig>, 'chart'> &
  StepLineConfig

const StepLineChart = forwardRef<HTMLDivElement | null, StepLineChartProps>(
  (props, ref) => {
    return <BaseChart chart={StepLine} ref={ref} {...props} />
  }
)

export default StepLineChart
