import React, { forwardRef } from 'react'
import { Liquid, LiquidConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type LiquidChartProps = Omit<BaseChartProps<LiquidConfig>, 'chart'> &
  LiquidConfig

const LiquidChart = forwardRef<BasePlot<LiquidConfig>, LiquidChartProps>(
  (props, ref) => {
    return <BaseChart chart={Liquid} ref={ref} {...props} />
  }
)

export default LiquidChart
