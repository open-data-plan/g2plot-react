import React, { FC } from 'react'
import { Calendar, CalendarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type CalendarChartProps = Omit<BaseChartProps, 'chart'> & CalendarConfig

const CalendarChart: FC<CalendarChartProps> = props => {
  return <BaseChart chart={Calendar} {...props} />
}

export default CalendarChart
