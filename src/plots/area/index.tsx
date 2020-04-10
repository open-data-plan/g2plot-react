import React, { FC } from 'react'
import { Area, AreaConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type AreaChartProps = Omit<BaseChartProps, 'chart'> & AreaConfig

const AreaChart: FC<AreaChartProps> = (props) => {
  return <BaseChart chart={Area} {...props} />
}

export default AreaChart
