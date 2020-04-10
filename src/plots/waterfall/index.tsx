import React, { FC } from 'react'
import { Waterfall, WaterfallConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type WaterfallChartProps = Omit<BaseChartProps, 'chart'> &
  WaterfallConfig

const WaterfallChart: FC<WaterfallChartProps> = (props) => {
  return <BaseChart chart={Waterfall} {...props} />
}

export default WaterfallChart
