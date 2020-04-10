import React, { FC } from 'react'
import { Bar, BarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type BarChartProps = Omit<BaseChartProps, 'chart'> & BarConfig

const BarChart: FC<BarChartProps> = (props) => {
  return <BaseChart chart={Bar} {...props} />
}

export default BarChart
