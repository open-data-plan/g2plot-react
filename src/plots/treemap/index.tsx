import React, { forwardRef } from 'react'
import { Treemap, TreemapConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type TreemapChartProps = Omit<BaseChartProps<TreemapConfig>, 'chart'> &
  TreemapConfig

const TreemapChart = forwardRef<BasePlot<TreemapConfig>, TreemapChartProps>(
  (props, ref) => {
    return <BaseChart chart={Treemap} ref={ref} {...props} />
  }
)

export default TreemapChart
