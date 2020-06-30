import React, { forwardRef } from 'react'
import { Heatmap, HeatmapConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type HeatmapChartProps = Omit<BaseChartProps<HeatmapConfig>, 'chart'> &
  HeatmapConfig

const HeatmapChart = forwardRef<HTMLDivElement | null, HeatmapChartProps>(
  (props, ref) => {
    return <BaseChart chart={Heatmap} ref={ref} {...props} />
  }
)

export default HeatmapChart
