import React, { FC } from 'react'
import { DualLine, DualLineConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type DualLineChartProps = Omit<BaseChartProps, 'chart'> & DualLineConfig

const DualLineChart: FC<DualLineChartProps> = (props) => {
  return <BaseChart chart={DualLine} {...props} />
}

export default DualLineChart
