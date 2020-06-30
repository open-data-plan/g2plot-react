import React, { forwardRef } from 'react'
import { Funnel, FunnelConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type FunnelChartProps = Omit<BaseChartProps<FunnelConfig>, 'chart'> &
  FunnelConfig

const FunnelChart = forwardRef<HTMLDivElement | null, FunnelChartProps>(
  (props, ref) => {
    return <BaseChart chart={Funnel} ref={ref} {...props} />
  }
)

export default FunnelChart
