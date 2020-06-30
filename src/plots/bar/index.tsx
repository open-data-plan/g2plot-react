import React, { forwardRef } from 'react'
import { Bar, BarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type BarChartProps = Omit<BaseChartProps<BarConfig>, 'chart'> & BarConfig

const BarChart = forwardRef<HTMLDivElement | null, BarChartProps>(
  (props, ref) => {
    return <BaseChart chart={Bar} ref={ref} {...props} />
  }
)

export default BarChart
