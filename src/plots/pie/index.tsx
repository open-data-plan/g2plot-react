import React, { forwardRef } from 'react'
import { Pie, PieConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type PieChartProps = Omit<BaseChartProps<PieConfig>, 'chart'> & PieConfig

const PieChart = forwardRef<BasePlot<PieConfig>, PieChartProps>(
  (props, ref) => {
    return <BaseChart chart={Pie} ref={ref} {...props} />
  }
)

export default PieChart
