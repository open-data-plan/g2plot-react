import React, { FC } from 'react'
import { StepLine, StepLineConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type StepLineChartProps = Omit<BaseChartProps, 'chart'> & StepLineConfig

const StepLineChart: FC<StepLineChartProps> = (props) => {
  return <BaseChart chart={StepLine} {...props} />
}

export default StepLineChart
