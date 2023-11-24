import { Liquid, LiquidOptions } from '@antv/g2plot'
import { forwardRef } from 'react'
import BaseChart, { BaseChartProps } from '../../components/base'

export type LiquidChartProps = Omit<BaseChartProps<LiquidOptions>, 'chart' | 'data'> & LiquidOptions

const LiquidChart = forwardRef<HTMLDivElement | null, LiquidChartProps>((props, ref) => {
  return <BaseChart chart={Liquid} ref={ref} {...props} />
})

export default LiquidChart
