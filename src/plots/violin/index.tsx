import { Violin, ViolinOptions } from '@antv/g2plot'
import { forwardRef } from 'react'
import BaseChart, { BaseChartProps } from '../../components/base'

export type ViolinChartProps = Omit<BaseChartProps<ViolinOptions>, 'chart' | 'data'> & ViolinOptions

const ViolinChart = forwardRef<HTMLDivElement | null, ViolinChartProps>((props, ref) => {
  return <BaseChart chart={Violin} ref={ref} {...props} />
})

export default ViolinChart
