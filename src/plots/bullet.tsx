import React, { FC } from 'react'
import { Bullet, BulletConfig } from '@antv/g2plot'
import BaseChart, { BaseChartProps } from './base'

export type BulletChartProps = Omit<BaseChartProps, 'chart'> & BulletConfig

const BulletChart: FC<BulletChartProps> = props => {
  return <BaseChart chart={Bullet} {...props} />
}

export default BulletChart
