import React, { forwardRef } from 'react'
import { Progress, ProgressConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type ProgressChartProps = Omit<BaseChartProps<ProgressConfig>, 'chart'> &
  ProgressConfig

const ProgressChart = forwardRef<HTMLDivElement | null, ProgressChartProps>(
  (props, ref) => {
    return <BaseChart chart={Progress} ref={ref} {...props} />
  }
)

export default ProgressChart
