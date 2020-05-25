import React, { forwardRef } from 'react'
import { Donut, DonutConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type DonutChartProps = Omit<BaseChartProps<DonutConfig>, 'chart'> &
  DonutConfig

const DonutChart = forwardRef<BasePlot<DonutConfig>, DonutChartProps>(
  (props, ref) => {
    return <BaseChart chart={Donut} ref={ref} {...props} />
  }
)

export default DonutChart
