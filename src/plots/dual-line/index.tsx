import React, { forwardRef } from 'react'
import { DualLine, DualLineConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type DualLineChartProps = Omit<BaseChartProps<DualLineConfig>, 'chart'> &
  DualLineConfig

const DualLineChart = forwardRef<BasePlot<DualLineConfig>, DualLineChartProps>(
  (props, ref) => {
    return <BaseChart chart={DualLine} ref={ref} {...props} />
  }
)

export default DualLineChart
