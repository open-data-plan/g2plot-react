import React, { FC } from 'react'
import { TinyColumn, TinyColumnConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from './base'

export type TinyColumnChartProps = Omit<BaseChartProps, 'chart'> &
  TinyColumnConfig

const TinyColumnChart: FC<TinyColumnChartProps> = props => {
  return <BaseChart chart={TinyColumn} {...props} />
}

export default TinyColumnChart
