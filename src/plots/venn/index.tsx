import React, { forwardRef } from 'react'
import { Venn, VennOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type VennChartProps = Omit<BaseChartProps<VennOptions>, 'chart'> &
  VennOptions

const VennChart = forwardRef<HTMLDivElement | null, VennChartProps>(
  (props, ref) => {
    return <BaseChart chart={Venn} ref={ref} {...props} />
  }
)

export default VennChart
