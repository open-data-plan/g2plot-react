import React, { FC } from 'react'
import { PercentageStackBar, PercentageStackBarConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps, Plot } from './base'
import BasePlot from '@antv/g2plot/lib/base/plot'

export type PercentageStackBarChartProps = Omit<BaseChartProps, 'chart'> &
  PercentageStackBarConfig

const PercentageStackBarChart: FC<PercentageStackBarChartProps> = props => {
  return (
    <BaseChart
      chart={
        // FIXME: remove `as` in next G2Plot version
        PercentageStackBar as Plot<
          BasePlot<PercentageStackBarConfig>,
          PercentageStackBarConfig
        >
      }
      {...props}
    />
  )
}

export default PercentageStackBarChart
