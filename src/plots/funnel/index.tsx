import { Funnel, FunnelOptions } from '@antv/g2plot';
import { forwardRef } from 'react';
import BaseChart, { BaseChartProps } from '../../components/base';

export type FunnelChartProps = Omit<BaseChartProps<FunnelOptions>, 'chart' | 'data'> & FunnelOptions;

const FunnelChart = forwardRef<HTMLDivElement | null, FunnelChartProps>((props, ref) => {
  return <BaseChart chart={Funnel} ref={ref} {...props} />;
});

export default FunnelChart;
