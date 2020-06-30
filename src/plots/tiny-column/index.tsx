import React, { forwardRef } from 'react'
import { TinyColumn, TinyColumnConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type TinyColumnChartProps = Omit<
  BaseChartProps<TinyColumnConfig>,
  'chart'
> &
  TinyColumnConfig

const TinyColumnChart = forwardRef<HTMLDivElement | null, TinyColumnChartProps>(
  (props, ref) => {
    return <BaseChart chart={TinyColumn} ref={ref} {...props} />
  }
)

export default TinyColumnChart
