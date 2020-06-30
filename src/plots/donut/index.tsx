import React, { forwardRef } from 'react'
import { Donut, DonutConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type DonutChartProps = Omit<BaseChartProps<DonutConfig>, 'chart'> &
  DonutConfig

const DonutChart = forwardRef<HTMLDivElement | null, DonutChartProps>(
  (props, ref) => {
    return <BaseChart chart={Donut} ref={ref} {...props} />
  }
)

export default DonutChart
