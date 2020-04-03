import React, { FC } from 'react'
import { Density, DensityConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type DensityChartProps = Omit<BaseChartProps, 'chart'> & DensityConfig

const DensityChart: FC<DensityChartProps> = props => {
  return <BaseChart chart={Density} {...props} />
}

export default DensityChart
