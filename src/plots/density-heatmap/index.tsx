import React, { forwardRef } from 'react'
import { DensityHeatmap, DensityHeatmapConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type DensityHeatmapChartProps = Omit<
  BaseChartProps<DensityHeatmapConfig>,
  'chart'
> &
  DensityHeatmapConfig

const DensityHeatmapChart = forwardRef<
  HTMLDivElement | null,
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
