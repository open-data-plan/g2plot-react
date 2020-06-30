import React, { forwardRef } from 'react'
import { Pie, PieConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type PieChartProps = Omit<BaseChartProps<PieConfig>, 'chart'> & PieConfig

const PieChart = forwardRef<HTMLDivElement | null, PieChartProps>(
  (props, ref) => {
    return <BaseChart chart={Pie} ref={ref} {...props} />
  }
)

export default PieChart
