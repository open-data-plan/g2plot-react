import { Facet, FacetOptions } from '@antv/g2plot';
import { forwardRef } from 'react';
import BaseChart, { BaseChartProps } from '../../components/base';

export type FacetChartProps = Omit<BaseChartProps<FacetOptions>, 'chart' | 'data'> & FacetOptions;

const FacetChart = forwardRef<HTMLDivElement | null, FacetChartProps>((props, ref) => {
  return <BaseChart chart={Facet} ref={ref} {...props} />;
});

export default FacetChart;
