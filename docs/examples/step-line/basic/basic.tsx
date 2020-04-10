import React, { useState, useEffect } from 'react'
import { StepLineChart } from '@opd/g2plot-react'
import { StepLineConfig } from '@antv/g2plot'

const config: StepLineConfig = {
  title: {
    visible: true,
    text: '单阶梯折线的基础用法',
  },
  description: {
    visible: true,
    text: '最基础简单的阶梯图使用方式，显示一个指标的趋势和变化',
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

const BasicStepLine = () => {
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

  return <StepLineChart {...config} data={data} />
}

export default BasicStepLine
