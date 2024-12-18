import { render } from '@testing-library/react';
import React from 'react';
import WordCloudChart from '../../src/plots/word-cloud';

describe('WordCloudChart', () => {
  test('should render without crashed', () => {
    const result = render(<WordCloudChart data={[]} wordField="w" weightField="weight" />);

    expect(result.container).toMatchSnapshot();
  });
});
