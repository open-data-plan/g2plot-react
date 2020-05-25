import React, { forwardRef } from 'react'
import { Ring, RingConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RingChartProps = Omit<BaseChartProps<RingConfig>, 'chart'> &
  RingConfig

const RingChart = forwardRef<BasePlot<RingConfig>, RingChartProps>(
  (props, ref) => {
    return <BaseChart chart={Ring} ref={ref} {...props} />
  }
)

export default RingChart
