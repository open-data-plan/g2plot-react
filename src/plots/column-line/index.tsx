import React, { FC } from 'react'
import { ColumnLine, ColumnLineConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type ColumnLineChartProps = Omit<BaseChartProps, 'chart'> &
  ColumnLineConfig

const ColumnLineChart: FC<ColumnLineChartProps> = (props) => {
  return <BaseChart chart={ColumnLine} {...props} />
}

export default ColumnLineChart
