import React, { FC } from 'react'
import { Treemap, TreemapConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type TreemapChartProps = Omit<BaseChartProps, 'chart'> & TreemapConfig

const TreemapChart: FC<TreemapChartProps> = (props) => {
  return <BaseChart chart={Treemap} {...props} />
}

export default TreemapChart
