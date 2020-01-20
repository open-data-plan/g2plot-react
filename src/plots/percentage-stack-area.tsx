import React, { FC } from 'react'
import { PercentageStackArea, PercentageStackAreaConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps, Plot } from './base'
import BasePlot from '@antv/g2plot/lib/base/plot'

export type PercentageStackAreaChartProps = Omit<BaseChartProps, 'chart'> &
  PercentageStackAreaConfig

const PercentageStackAreaChart: FC<PercentageStackAreaChartProps> = props => {
  return (
    <BaseChart
      chart={
        // FIXME: remove `as` in next G2Plot version
        PercentageStackArea as Plot<
          BasePlot<PercentageStackAreaConfig>,
          PercentageStackAreaConfig
        >
      }
      {...props}
    />
  )
}

export default PercentageStackAreaChart
