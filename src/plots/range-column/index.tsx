import React, { FC } from 'react'
import { RangeColumn, RangeColumnConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RangeColumnChartProps = Omit<BaseChartProps, 'chart'> &
  RangeColumnConfig

const RangeColumnChart: FC<RangeColumnChartProps> = (props) => {
  return <BaseChart chart={RangeColumn} {...props} />
}

export default RangeColumnChart
