import { Waterfall, WaterfallOptions } from '@antv/g2plot';
import { forwardRef } from 'react';
import BaseChart, { BaseChartProps } from '../../components/base';

export type WaterfallChartProps = Omit<BaseChartProps<WaterfallOptions>, 'chart' | 'data'> & WaterfallOptions;

const WaterfallChart = forwardRef<HTMLDivElement | null, WaterfallChartProps>((props, ref) => {
  return <BaseChart chart={Waterfall} ref={ref} {...props} />;
});

export default WaterfallChart;
