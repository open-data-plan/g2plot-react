import React, { forwardRef } from 'react'
import {
  DensityHeatmap,
  DensityHeatmapConfig,
  Base as BasePlot,
} from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type DensityHeatmapChartProps = Omit<
  BaseChartProps<DensityHeatmapConfig>,
  'chart'
> &
  DensityHeatmapConfig

const DensityHeatmapChart = forwardRef<
  BasePlot<DensityHeatmapConfig>,
  DensityHeatmapChartProps
>((props, ref) => {
  return (
    <BaseChart<DensityHeatmapConfig>
      chart={DensityHeatmap}
      ref={ref}
      {...props}
    />
  )
})

export default DensityHeatmapChart
