import React, { forwardRef } from 'react'
import { Calendar, CalendarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type CalendarChartProps = Omit<BaseChartProps<CalendarConfig>, 'chart'> &
  CalendarConfig

const CalendarChart = forwardRef<HTMLDivElement | null, CalendarChartProps>(
  (props, ref) => {
    return <BaseChart chart={Calendar} ref={ref} {...props} />
  }
)

export default CalendarChart
