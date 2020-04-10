import React, { FC } from 'react'
import { Heatmap, HeatmapConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type HeatmapChartProps = Omit<BaseChartProps, 'chart'> & HeatmapConfig

const HeatmapChart: FC<HeatmapChartProps> = (props) => {
  return <BaseChart chart={Heatmap} {...props} />
}

export default HeatmapChart
