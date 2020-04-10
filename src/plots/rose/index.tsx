import React, { FC } from 'react'
import { Rose, RoseConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RoseChartProps = Omit<BaseChartProps, 'chart'> & RoseConfig

const RoseChart: FC<RoseChartProps> = (props) => {
  return <BaseChart chart={Rose} {...props} />
}

export default RoseChart
