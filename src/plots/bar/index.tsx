import { Bar, BarOptions } from '@antv/g2plot'
import { forwardRef } from 'react'
import BaseChart, { BaseChartProps } from '../../components/base'

export type BarChartProps = Omit<BaseChartProps<BarOptions>, 'chart' | 'data'> &
  BarOptions

const BarChart = forwardRef<HTMLDivElement | null, BarChartProps>(
  (props, ref) => {
    return <BaseChart chart={Bar} ref={ref} {...props} />
  }
)

export default BarChart
