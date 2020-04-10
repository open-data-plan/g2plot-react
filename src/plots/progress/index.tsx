import React, { FC } from 'react'
import { Progress, ProgressConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type ProgressChartProps = Omit<BaseChartProps, 'chart'> & ProgressConfig

const ProgressChart: FC<ProgressChartProps> = (props) => {
  return <BaseChart chart={Progress} {...props} />
}

export default ProgressChart
