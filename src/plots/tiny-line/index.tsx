import React, { forwardRef } from 'react'
import { TinyLine, TinyLineConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type TinyLineChartProps = Omit<BaseChartProps<TinyLineConfig>, 'chart'> &
  TinyLineConfig

const TinyLineChart = forwardRef<HTMLDivElement | null, TinyLineChartProps>(
  (props, ref) => {
    return <BaseChart chart={TinyLine} ref={ref} {...props} />
  }
)

export default TinyLineChart
