import { PieChart } from '@opd/g2plot-react';

const pieConfig = {
  height: 350,
  autoFit: true,
  padding: 'auto',
  radius: 1,
  data: [
    {
      type: 'A',
      value: 27,
    },
    {
      type: 'B',
      value: 25,
    },
    {
      type: 'C',
      value: 18,
    },
    {
      type: 'D',
      value: 15,
    },
    {
      type: 'E',
      value: 10,
    },
    {
      type: 'Others',
      value: 5,
    },
  ],
  angleField: 'value',
  colorField: 'type',
  label: {
    visible: true,
    type: 'inner',
  },
  legend: {
    visible: false,
  },
};

export default () => {
  return <PieChart {...pieConfig} />;
};
