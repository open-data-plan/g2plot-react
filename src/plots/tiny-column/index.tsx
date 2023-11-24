import { TinyColumn, TinyColumnOptions } from '@antv/g2plot'
import { forwardRef } from 'react'
import BaseChart, { BaseChartProps } from '../../components/base'

export type TinyColumnChartProps = Omit<BaseChartProps<TinyColumnOptions>, 'chart' | 'data'> & TinyColumnOptions

const TinyColumnChart = forwardRef<HTMLDivElement | null, TinyColumnChartProps>((props, ref) => {
  return <BaseChart chart={TinyColumn} ref={ref} {...props} />
})

export default TinyColumnChart
