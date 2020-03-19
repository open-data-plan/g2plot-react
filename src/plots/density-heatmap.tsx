import React, { FC } from 'react'
import { DensityHeatmap, DensityHeatmapConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from './base'

export type DensityHeatmapChartProps = Omit<BaseChartProps, 'chart'> &
  DensityHeatmapConfig

const DensityHeatmapChart: FC<DensityHeatmapChartProps> = props => {
  return <BaseChart chart={DensityHeatmap} {...props} />
}

export default DensityHeatmapChart
