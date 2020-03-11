import React, { useState, useEffect } from 'react'
import { AreaChart } from '@opd/g2plot-react'
import { AreaConfig } from '@antv/g2plot'

const config: AreaConfig = {
  title: {
    visible: true,
    text: '基础面积图',
  },
  xField: 'Date',
  yField: 'scales',
  xAxis: {
    type: 'time',
    tickCount: 5,
  },
}

const BasicArea = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    let active = true
    fetch('https://g2plot.antv.vision/zh/examples/data/fireworks-sales.json')
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

  return <AreaChart {...config} data={data} />
}

export default BasicArea
