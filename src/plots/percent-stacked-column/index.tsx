import React, { forwardRef } from 'react'
import {
  PercentStackedColumn,
  PercentStackedColumnConfig,
  Base as BasePlot,
} from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type PercentStackedColumnChartProps = Omit<
  BaseChartProps<PercentStackedColumnConfig>,
  'chart'
> &
  PercentStackedColumnConfig

const PercentStackedColumnChart = forwardRef<
  BasePlot<PercentStackedColumnConfig>,
  PercentStackedColumnChartProps
>((props, ref) => {
  return <BaseChart chart={PercentStackedColumn} ref={ref} {...props} />
})

export default PercentStackedColumnChart
