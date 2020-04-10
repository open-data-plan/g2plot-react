import React, { FC } from 'react'
import { Pie, PieConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type PieChartProps = Omit<BaseChartProps, 'chart'> & PieConfig

const PieChart: FC<PieChartProps> = (props) => {
  return <BaseChart chart={Pie} {...props} />
}

export default PieChart
