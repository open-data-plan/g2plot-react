import React, { useState, useEffect } from 'react'
import { StackAreaChart } from '@opd/g2plot-react'
import { StackAreaConfig } from '@antv/g2plot'

const config: StackAreaConfig = {
  title: {
    visible: true,
    text: '堆叠面积图 - lineLabel',
  },
  description: {
    visible: true,
    text: '当label类型设置为line时，label与面积区域尾端顶部对齐。',
  },
  xField: 'date',
  yField: 'value',
  stackField: 'country',
  xAxis: {
    tickCount: 5,
  },
  label: {
    visible: true,
    type: 'line',
    // autoScale: true,
  },
  legend: {
    visible: true,
    position: 'right-top',
  },
}

const LineLabelStackArea = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    let active = true
    fetch('https://g2plot.antv.vision/zh/examples/data/oil.json')
      .then(res => res.json())
      .then(data => {
        if (active) {
          setData(data)
        }
      })
    return () => {
      active = false
    }
  }, [])

  return <StackAreaChart {...config} data={data} />
}

export default LineLabelStackArea
