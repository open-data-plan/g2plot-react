import React from 'react'
import { create } from 'react-test-renderer'
import WordCloudChart from '../../src/plots/word-cloud'

describe('WordCloudChart', () => {
  test('should render without crashed', () => {
    const renderer = create(
      <WordCloudChart data={[]} tooltip={{ visible: true }} />
    )

    expect(renderer.toJSON()).toMatchSnapshot()
  })
})
