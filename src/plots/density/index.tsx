import React, { forwardRef } from 'react'
import { Density, DensityConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type DensityChartProps = Omit<BaseChartProps<DensityConfig>, 'chart'> &
  DensityConfig

const DensityChart = forwardRef<BasePlot<DensityConfig>, DensityChartProps>(
  (props, ref) => {
    return <BaseChart chart={Density} ref={ref} {...props} />
  }
)

export default DensityChart
