import React, { forwardRef } from 'react'
import { Bullet, BulletConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from '../../components/base'

export type BulletChartProps = Omit<BaseChartProps<BulletConfig>, 'chart'> &
  BulletConfig

const BulletChart = forwardRef<HTMLDivElement | null, BulletChartProps>(
  (props, ref) => {
    return <BaseChart chart={Bullet} ref={ref} {...props} />
  }
)

export default BulletChart
