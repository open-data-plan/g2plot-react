import { Mix, MixOptions } from '@antv/g2plot'
import { forwardRef } from 'react'
import BaseChart, { BaseChartProps } from '../../components/base'

export type MultiViewChartProps = Omit<
  BaseChartProps<MixOptions>,
  'chart' | 'data'
> &
  MixOptions

/**
 * @deprecated use `MixChart` instead
 */
const MultiViewChart = forwardRef<HTMLDivElement | null, MultiViewChartProps>(
  (props, ref) => {
    return <BaseChart chart={Mix} ref={ref} {...props} />
  }
)

export default MultiViewChart
