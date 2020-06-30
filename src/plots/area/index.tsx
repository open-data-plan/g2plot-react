import React, { forwardRef } from 'react'
import { Area, AreaConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type AreaChartProps = Omit<BaseChartProps<AreaConfig>, 'chart'> &
  AreaConfig

const AreaChart = forwardRef<HTMLDivElement | null, AreaChartProps>(
  (props, ref) => {
    return <BaseChart chart={Area} ref={ref} {...props} />
  }
)

export default AreaChart
