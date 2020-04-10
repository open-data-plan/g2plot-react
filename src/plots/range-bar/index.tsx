import React, { FC } from 'react'
import { RangeBar, RangeBarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RangeBarChartProps = Omit<BaseChartProps, 'chart'> & RangeBarConfig

const RangeBarChart: FC<RangeBarChartProps> = (props) => {
  return <BaseChart chart={RangeBar} {...props} />
}

export default RangeBarChart
