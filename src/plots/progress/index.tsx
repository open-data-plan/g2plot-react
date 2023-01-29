import { Progress, ProgressOptions } from '@antv/g2plot'
import { forwardRef } from 'react'
import BaseChart, { BaseChartProps } from '../../components/base'

export type ProgressChartProps = Omit<
  BaseChartProps<ProgressOptions>,
  'chart' | 'data'
> &
  ProgressOptions

const ProgressChart = forwardRef<HTMLDivElement | null, ProgressChartProps>(
  (props, ref) => {
    return <BaseChart chart={Progress} ref={ref} {...props} />
  }
)

export default ProgressChart
