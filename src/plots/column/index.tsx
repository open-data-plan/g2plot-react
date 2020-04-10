import React, { FC } from 'react'
import { Column, ColumnConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type ColumnChartProps = Omit<BaseChartProps, 'chart'> & ColumnConfig

const ColumnChart: FC<ColumnChartProps> = (props) => {
  return <BaseChart chart={Column} {...props} />
}

export default ColumnChart
