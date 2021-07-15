import React, { forwardRef } from 'react'
import { Radar, RadarOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RadarChartProps = Omit<
  BaseChartProps<RadarOptions>,
  'chart' | 'data'
> &
  RadarOptions

const RadarChart = forwardRef<HTMLDivElement | null, RadarChartProps>(
  (props, ref) => {
    return <BaseChart chart={Radar} ref={ref} {...props} />
  }
)

export default RadarChart
