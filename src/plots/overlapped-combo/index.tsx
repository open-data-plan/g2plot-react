import React, { FC } from 'react'
import { OverlappedComboPlot, OverlappedComboPlotConfig } from '@antv/g2plot'
import ComboChart, { ComboChartProps } from '../../components/combo'

export type OverlappedComboPlotChartProps = Omit<ComboChartProps, 'chart'> &
  OverlappedComboPlotConfig

const OverlappedComboPlotChart: FC<OverlappedComboPlotChartProps> = props => {
  return <ComboChart chart={OverlappedComboPlot} {...props} />
}

export default OverlappedComboPlotChart
