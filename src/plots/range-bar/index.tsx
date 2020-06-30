import React, { forwardRef } from 'react'
import { RangeBar, RangeBarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type RangeBarChartProps = Omit<BaseChartProps<RangeBarConfig>, 'chart'> &
  RangeBarConfig

const RangeBarChart = forwardRef<HTMLDivElement | null, RangeBarChartProps>(
  (props, ref) => {
    return <BaseChart chart={RangeBar} ref={ref} {...props} />
  }
)

export default RangeBarChart
