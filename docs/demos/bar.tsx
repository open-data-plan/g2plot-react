import { BarChart } from '@opd/g2plot-react';

const config = {
  height: 350,
  autoFit: true,
  xField: 'value',
  yField: 'year',
  smooth: true,
  meta: {
    value: {
      max: 15,
    },
  },
  data: [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 11 },
  ],
};

export default () => {
  return <BarChart {...config} />;
};
