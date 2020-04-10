import React, { FC } from 'react'
import { RingProgress, RingProgressConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RingProgressChartProps = Omit<BaseChartProps, 'chart'> &
  RingProgressConfig

const RingProgressChart: FC<RingProgressChartProps> = (props) => {
  return <BaseChart chart={RingProgress} {...props} />
}

export default RingProgressChart
