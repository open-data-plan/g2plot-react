import React, { useState, useEffect } from 'react'
import { StackedAreaChart } from '@opd/g2plot-react'
import { StackedAreaConfig } from '@antv/g2plot'

const config: StackedAreaConfig = {
  title: {
    visible: true,
    text: '堆叠面积图',
  },
  xField: 'date',
  yField: 'value',
  stackField: 'country',
  xAxis: {
    tickCount: 5,
  },
  legend: {
    visible: true,
    position: 'right-top',
  },
  responsive: true,
  label: {},
}

const BasicStackedArea = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    let active = true
    fetch('https://g2plot.antv.vision/zh/examples/data/oil.json')
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

  return <StackedAreaChart {...config} data={data} />
}

export default BasicStackedArea
