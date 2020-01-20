import React, { FC } from 'react'
import {
  PercentageStackColumn,
  PercentageStackColumnConfig,
} from '@antv/g2plot'
import BaseChart, { BaseChartProps, Plot } from './base'
import BasePlot from '@antv/g2plot/lib/base/plot'

export type PercentageStackColumnChartProps = Omit<BaseChartProps, 'chart'> &
  PercentageStackColumnConfig

const PercentageStackColumnChart: FC<PercentageStackColumnChartProps> = props => {
  return (
    <BaseChart
      chart={
        // FIXME: remove `as` in next G2Plot version
        PercentageStackColumn as Plot<
          BasePlot<PercentageStackColumnConfig>,
          PercentageStackColumnConfig
        >
      }
      {...props}
    />
  )
}

export default PercentageStackColumnChart
