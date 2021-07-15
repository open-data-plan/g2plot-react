import React, { forwardRef } from 'react'
import { Treemap, TreemapOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type TreemapChartProps = Omit<
  BaseChartProps<TreemapOptions>,
  'chart' | 'data'
> &
  TreemapOptions

const TreemapChart = forwardRef<HTMLDivElement | null, TreemapChartProps>(
  (props, ref) => {
    return <BaseChart chart={Treemap} ref={ref} {...props} />
  }
)

export default TreemapChart
