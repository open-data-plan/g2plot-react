import React, { FC } from 'react'
import { StackedColumnLine, StackedColumnLineConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StackedColumnLineChartProps = Omit<BaseChartProps, 'chart'> &
  StackedColumnLineConfig

const StackedColumnLineChart: FC<StackedColumnLineChartProps> = (props) => {
  return <BaseChart chart={StackededColumnLine} {...props} />
}

export default StackedColumnLineChart
