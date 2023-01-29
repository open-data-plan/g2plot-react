import { Box, BoxOptions } from '@antv/g2plot'
import { forwardRef } from 'react'
import BaseChart, { BaseChartProps } from '../../components/base'

export type BoxChartProps = Omit<BaseChartProps<BoxOptions>, 'chart' | 'data'> &
  BoxOptions

const BoxChart = forwardRef<HTMLDivElement | null, BoxChartProps>(
  (props, ref) => {
    return <BaseChart chart={Box} ref={ref} {...props} />
  }
)

export default BoxChart
