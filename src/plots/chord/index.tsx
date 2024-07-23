import { Chord, ChordOptions } from '@antv/g2plot';
import { forwardRef } from 'react';
import BaseChart, { BaseChartProps } from '../../components/base';

export type ChordChartProps = Omit<BaseChartProps<ChordOptions>, 'chart' | 'data'> & ChordOptions;

const ChordChart = forwardRef<HTMLDivElement | null, ChordChartProps>((props, ref) => {
  return <BaseChart chart={Chord} ref={ref} {...props} />;
});

export default ChordChart;
