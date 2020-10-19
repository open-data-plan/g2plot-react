import React, { forwardRef } from 'react'
import { Box, BoxOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type BoxChartProps = Omit<BaseChartProps<BoxOptions>, 'chart'> &
  BoxOptions

const BoxChart = forwardRef<HTMLDivElement | null, BoxChartProps>(
  (props, ref) => {
    return <BaseChart chart={Box} ref={ref} {...props} />
  }
)

export default BoxChart
