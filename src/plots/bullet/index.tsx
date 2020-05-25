import React, { forwardRef } from 'react'
import { Bullet, BulletConfig, Base as BasePlot } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type BulletChartProps = Omit<BaseChartProps<BulletConfig>, 'chart'> &
  BulletConfig

const BulletChart = forwardRef<BasePlot<BulletConfig>, BulletChartProps>(
  (props, ref) => {
    return <BaseChart chart={Bullet} ref={ref} {...props} />
  }
)

export default BulletChart
