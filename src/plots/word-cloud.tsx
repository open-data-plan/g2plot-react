import React, { FC } from 'react'
import { WordCloud, WordCloudConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from './base'

export type WordCloudChartProps = Omit<BaseChartProps, 'chart'> &
  WordCloudConfig

const WordCloudChart: FC<WordCloudChartProps> = props => {
  return <BaseChart chart={WordCloud} {...props} />
}

export default WordCloudChart
