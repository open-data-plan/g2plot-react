import React, { forwardRef } from 'react'
import { Sunburst, SunburstOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type SunburstChartProps = Omit<
  BaseChartProps<SunburstOptions>,
  'chart' | 'data'
> &
  SunburstOptions

const SunburstChart = forwardRef<HTMLDivElement | null, SunburstChartProps>(
  (props, ref) => {
    return <BaseChart chart={Sunburst} ref={ref} {...props} />
  }
)

export default SunburstChart
