import React, { forwardRef } from 'react'
import { TinyArea, TinyAreaConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type TinyAreaChartProps = Omit<BaseChartProps<TinyAreaConfig>, 'chart'> &
  TinyAreaConfig

const TinyAreaChart = forwardRef<BasePlot<TinyAreaConfig>, TinyAreaChartProps>(
  (props, ref) => {
    return <BaseChart chart={TinyArea} ref={ref} {...props} />
  }
)

export default TinyAreaChart
