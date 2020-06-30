import React, { forwardRef } from 'react'
import { WordCloud, WordCloudConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type WordCloudChartProps = Omit<
  BaseChartProps<WordCloudConfig>,
  'chart'
> &
  WordCloudConfig

const WordCloudChart = forwardRef<HTMLDivElement | null, WordCloudChartProps>(
  (props, ref) => {
    return <BaseChart chart={WordCloud} ref={ref} {...props} />
  }
)

export default WordCloudChart
