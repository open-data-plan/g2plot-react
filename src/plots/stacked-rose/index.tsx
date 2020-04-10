import React, { FC } from 'react'
import { StackedRose, StackedRoseConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StackedRoseChartProps = Omit<BaseChartProps, 'chart'> &
  StackedRoseConfig

const StackedRoseChart: FC<StackedRoseChartProps> = (props) => {
  return <BaseChart chart={StackedRose} {...props} />
}

export default StackedRoseChart
