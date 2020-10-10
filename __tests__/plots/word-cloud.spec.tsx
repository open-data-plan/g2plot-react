import React from 'react'
import { create } from 'react-test-renderer'
import WordCloudChart from '../../src/plots/word-cloud'

describe('WordCloudChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <WordCloudChart data={[]} wordField="w" weightField="weight" />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
