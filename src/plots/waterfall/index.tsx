import React, { forwardRef } from 'react'
import { Waterfall, WaterfallConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type WaterfallChartProps = Omit<
  BaseChartProps<WaterfallConfig>,
  'chart'
> &
  WaterfallConfig

const WaterfallChart = forwardRef<
  BasePlot<WaterfallConfig>,
  WaterfallChartProps
>((props, ref) => {
  return <BaseChart chart={Waterfall} ref={ref} {...props} />
})

export default WaterfallChart
