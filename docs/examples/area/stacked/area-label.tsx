import React, { useState, useEffect } from 'react'
import { StackedAreaChart } from '@opd/g2plot-react'
import { StackedAreaConfig } from '@antv/g2plot'

const config: StackedAreaConfig = {
  title: {
    visible: true,
    text: '堆叠面积图-areaLabel',
  },
  description: {
    visible: true,
    text:
      '堆叠面积图中，将label type设置为area时，label显示在堆叠区域内，使用户能够更容易的通过视觉将label和对应图形产生联系。autoScale配置项设置为true时，label会自适应堆叠区域的大小。',
  },
  xField: 'date',
  yField: 'value',
  stackField: 'country',
  xAxis: {
    tickCount: 5,
  },
  label: {
    visible: true,
    type: 'area',
    // autoScale: true,
  },
  legend: {
    visible: true,
    position: 'right-top',
  },
  responsive: true,
}

const LabelStackedArea = () => {
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

export default LabelStackedArea
