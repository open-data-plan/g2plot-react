import React, { forwardRef } from 'react'
import { Area, AreaConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type AreaChartProps = Omit<BaseChartProps<AreaConfig>, 'chart'> &
  AreaConfig

const AreaChart = forwardRef<BasePlot<AreaConfig>, AreaChartProps>(
  (props, ref) => {
    return <BaseChart chart={Area} ref={ref} {...props} />
  }
)

export default AreaChart
