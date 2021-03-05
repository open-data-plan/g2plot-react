import React, { forwardRef } from 'react'
import { MultiView, MultiViewOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type MultiViewChartProps = Omit<
  BaseChartProps<MultiViewOptions>,
  'chart'
> &
  MultiViewOptions

const MultiViewChart = forwardRef<HTMLDivElement | null, MultiViewChartProps>(
  (props, ref) => {
    return <BaseChart chart={MultiView} ref={ref} {...props} />
  }
)

export default MultiViewChart
