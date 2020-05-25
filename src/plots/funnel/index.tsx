import React, { forwardRef } from 'react'
import { Funnel, FunnelConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type FunnelChartProps = Omit<BaseChartProps<FunnelConfig>, 'chart'> &
  FunnelConfig

const FunnelChart = forwardRef<BasePlot<FunnelConfig>, FunnelChartProps>(
  (props, ref) => {
    return <BaseChart chart={Funnel} ref={ref} {...props} />
  }
)

export default FunnelChart
