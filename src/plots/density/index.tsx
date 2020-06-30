import React, { forwardRef } from 'react'
import { Density, DensityConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type DensityChartProps = Omit<BaseChartProps<DensityConfig>, 'chart'> &
  DensityConfig

const DensityChart = forwardRef<HTMLDivElement | null, DensityChartProps>(
  (props, ref) => {
    return <BaseChart chart={Density} ref={ref} {...props} />
  }
)

export default DensityChart
