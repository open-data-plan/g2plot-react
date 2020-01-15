import React, { FC } from 'react'
import { StackColumn, StackColumnConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from './base'

export type StackColumnChartProps = Omit<BaseChartProps, 'chart'> &
  StackColumnConfig

const StackColumnChart: FC<StackColumnChartProps> = props => {
  return <BaseChart chart={StackColumn} {...props} />
}

export default StackColumnChart
