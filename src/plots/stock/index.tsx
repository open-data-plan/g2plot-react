import { Stock, StockOptions } from '@antv/g2plot'
import { forwardRef } from 'react'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StockChartProps = Omit<BaseChartProps<StockOptions>, 'chart' | 'data'> & StockOptions

const StockChart = forwardRef<HTMLDivElement | null, StockChartProps>((props, ref) => {
  return <BaseChart chart={Stock} ref={ref} {...props} />
})

export default StockChart
