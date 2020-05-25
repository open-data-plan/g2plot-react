import React, { forwardRef } from 'react'
import { Calendar, CalendarConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type CalendarChartProps = Omit<BaseChartProps<CalendarConfig>, 'chart'> &
  CalendarConfig

const CalendarChart = forwardRef<BasePlot<CalendarConfig>, CalendarChartProps>(
  (props, ref) => {
    return <BaseChart chart={Calendar} ref={ref} {...props} />
  }
)

export default CalendarChart
