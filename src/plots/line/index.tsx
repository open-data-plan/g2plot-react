import { Line, LineOptions } from '@antv/g2plot'
import { forwardRef } from 'react'
import BaseChart, { BaseChartProps } from '../../components/base'

export type LineChartProps = Omit<BaseChartProps<LineOptions>, 'chart' | 'data'> & LineOptions

const LineChart = forwardRef<HTMLDivElement | null, LineChartProps>((props, ref) => {
  return <BaseChart chart={Line} ref={ref} {...props} />
})

export default LineChart
