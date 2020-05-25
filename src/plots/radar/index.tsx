import React, { forwardRef } from 'react'
import { Radar, RadarConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RadarChartProps = Omit<BaseChartProps<RadarConfig>, 'chart'> &
  RadarConfig

const RadarChart = forwardRef<BasePlot<RadarConfig>, RadarChartProps>(
  (props, ref) => {
    return <BaseChart chart={Radar} ref={ref} {...props} />
  }
)

export default RadarChart
