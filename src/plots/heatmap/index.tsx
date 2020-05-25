import React, { forwardRef } from 'react'
import { Heatmap, HeatmapConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type HeatmapChartProps = Omit<BaseChartProps<HeatmapConfig>, 'chart'> &
  HeatmapConfig

const HeatmapChart = forwardRef<BasePlot<HeatmapConfig>, HeatmapChartProps>(
  (props, ref) => {
    return <BaseChart chart={Heatmap} ref={ref} {...props} />
  }
)

export default HeatmapChart
