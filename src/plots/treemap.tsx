import React, { FC } from 'react'
import { Treemap } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from './base'
// FIXME: fix this after https://github.com/antvis/G2Plot/pull/652 merged
import { TreemapConfig } from '@antv/g2plot/lib/plots/treemap'

export type TreemapChartProps = Omit<BaseChartProps, 'chart'> & TreemapConfig

const TreemapChart: FC<TreemapChartProps> = props => {
  return <BaseChart chart={Treemap} {...props} />
}

export default TreemapChart
