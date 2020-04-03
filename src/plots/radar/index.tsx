import React, { FC } from 'react'
import { Radar, RadarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RadarChartProps = Omit<BaseChartProps, 'chart'> & RadarConfig

const RadarChart: FC<RadarChartProps> = props => {
  return <BaseChart chart={Radar} {...props} />
}

export default RadarChart
