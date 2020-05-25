import React, { forwardRef } from 'react'
import { WordCloud, WordCloudConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type WordCloudChartProps = Omit<
  BaseChartProps<WordCloudConfig>,
  'chart'
> &
  WordCloudConfig

const WordCloudChart = forwardRef<
  BasePlot<WordCloudConfig>,
  WordCloudChartProps
>((props, ref) => {
  return <BaseChart chart={WordCloud} ref={ref} {...props} />
})

export default WordCloudChart
