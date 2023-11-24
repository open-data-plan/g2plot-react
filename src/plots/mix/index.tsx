import { Mix, MixOptions } from '@antv/g2plot'
import { forwardRef } from 'react'
import BaseChart, { BaseChartProps } from '../../components/base'

export type MixChartProps = Omit<BaseChartProps<MixOptions>, 'chart' | 'data'> & MixOptions

const MixChart = forwardRef<HTMLDivElement | null, MixChartProps>((props, ref) => {
  return <BaseChart chart={Mix} ref={ref} {...props} />
})

export default MixChart
