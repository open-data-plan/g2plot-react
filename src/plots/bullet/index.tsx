import { Bullet, BulletOptions } from '@antv/g2plot';
import { forwardRef } from 'react';
import BaseChart, { BaseChartProps } from '../../components/base';

export type BulletChartProps = Omit<BaseChartProps<BulletOptions>, 'chart' | 'data'> & BulletOptions;

const BulletChart = forwardRef<HTMLDivElement | null, BulletChartProps>((props, ref) => {
  return <BaseChart chart={Bullet} ref={ref} {...props} />;
});

export default BulletChart;
