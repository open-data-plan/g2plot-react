import React, { forwardRef } from 'react'
import { Bubble, BubbleConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type BubbleChartProps = Omit<BaseChartProps<BubbleConfig>, 'chart'> &
  BubbleConfig

const BubbleChart = forwardRef<BasePlot<BubbleConfig>, BubbleChartProps>(
  (props, ref) => {
    return <BaseChart chart={Bubble} ref={ref} {...props} />
  }
)

export default BubbleChart
