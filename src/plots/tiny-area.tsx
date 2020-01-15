import React, { FC } from 'react'
import { TinyArea, TinyAreaConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from './base'

export type TinyAreaChartProps = Omit<BaseChartProps, 'chart'> & TinyAreaConfig

const TinyAreaChart: FC<TinyAreaChartProps> = props => {
  return <BaseChart chart={TinyArea} {...props} />
}

export default TinyAreaChart
