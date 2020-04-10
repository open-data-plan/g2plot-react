import React, { FC } from 'react'
import { Donut, DonutConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type DonutChartProps = Omit<BaseChartProps, 'chart'> & DonutConfig

const DonutChart: FC<DonutChartProps> = (props) => {
  return <BaseChart chart={Donut} {...props} />
}

export default DonutChart
