import React, { forwardRef } from 'react'
import { WordCloud, WordCloudOptions } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type WordCloudChartProps = Omit<
  BaseChartProps<WordCloudOptions>,
  'chart' | 'data'
> &
  WordCloudOptions

const WordCloudChart = forwardRef<HTMLDivElement | null, WordCloudChartProps>(
  (props, ref) => {
    return <BaseChart chart={WordCloud} ref={ref} {...props} />
  }
)

export default WordCloudChart
