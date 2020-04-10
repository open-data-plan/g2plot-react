import React, { FC } from 'react'
import { Liquid, LiquidConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type LiquidChartProps = Omit<BaseChartProps, 'chart'> & LiquidConfig

const LiquidChart: FC<LiquidChartProps> = (props) => {
  return <BaseChart chart={Liquid} {...props} />
}

export default LiquidChart
