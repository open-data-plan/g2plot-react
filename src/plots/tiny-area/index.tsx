import React, { forwardRef } from 'react'
import { TinyArea, TinyAreaOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type TinyAreaChartProps = Omit<
  BaseChartProps<TinyAreaOptions>,
  'chart' | 'data'
> &
  TinyAreaOptions

const TinyAreaChart = forwardRef<HTMLDivElement | null, TinyAreaChartProps>(
  (props, ref) => {
    return <BaseChart chart={TinyArea} ref={ref} {...props} />
  }
)

export default TinyAreaChart
