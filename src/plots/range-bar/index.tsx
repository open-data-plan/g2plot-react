import React, { forwardRef } from 'react'
import { RangeBar, RangeBarConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RangeBarChartProps = Omit<BaseChartProps<RangeBarConfig>, 'chart'> &
  RangeBarConfig

const RangeBarChart = forwardRef<BasePlot<RangeBarConfig>, RangeBarChartProps>(
  (props, ref) => {
    return <BaseChart chart={RangeBar} ref={ref} {...props} />
  }
)

export default RangeBarChart
