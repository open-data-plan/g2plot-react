import React, { forwardRef } from 'react'
import { Pie, PieOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type PieChartProps = Omit<BaseChartProps<PieOptions>, 'chart' | 'data'> &
  PieOptions

const PieChart = forwardRef<HTMLDivElement | null, PieChartProps>(
  (props, ref) => {
    return <BaseChart chart={Pie} ref={ref} {...props} />
  }
)

export default PieChart
