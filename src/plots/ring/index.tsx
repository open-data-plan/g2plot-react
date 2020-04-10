import React, { FC } from 'react'
import { Ring, RingConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RingChartProps = Omit<BaseChartProps, 'chart'> & RingConfig

const RingChart: FC<RingChartProps> = (props) => {
  return <BaseChart chart={Ring} {...props} />
}

export default RingChart
