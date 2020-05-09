import React, { useState, useEffect } from 'react'
import { LineChart, LineChartProps } from '@opd/g2plot-react'

const config: LineChartProps = {
  title: {
    visible: true,
    text: '单折线图的基础用法',
  },
  description: {
    visible: true,
    text: '最基础简单的折线图使用方式，显示一个指标的趋势',
  },
  forceFit: true,
  padding: 'auto',
  xField: 'Date',
  yField: 'scales',
  xAxis: {
    type: 'time',
    tickCount: 5,
    mask: 'YYYY-MM',
  },
}

const BasicLine = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    let active = true
    fetch('https://g2plot.antv.vision/zh/examples/data/fireworks-sales.json')
      .then((res) => res.json())
      .then((data) => {
        if (active) {
          setData(data)
        }
      })
    return () => {
      active = false
    }
  }, [])

  return <LineChart {...config} data={data} />
}

export default BasicLine
