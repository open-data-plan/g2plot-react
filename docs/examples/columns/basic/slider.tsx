import React, { useState, useEffect } from 'react'
import { ColumnChart } from '@opd/g2plot-react'
import { ColumnConfig } from '@antv/g2plot'

const config: ColumnConfig = {
  title: {
    visible: true,
    text: '基础柱状图-缩略轴',
  },
  description: {
    visible: true,
    text:
      '缩略轴 (slider) 交互适用于数据较多，用户希望关注数据集中某个特殊区间的场景。',
  },
  forceFit: true,
  padding: 'auto',
  xField: '城市',
  xAxis: {
    visible: true,
    autoHideLabel: true,
  },
  yAxis: {
    visible: true,
    label: {
      formatter: v => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, s => `${s},`),
    },
  },
  yField: '销售额',
  interactions: [
    {
      type: 'slider',
      cfg: {
        start: 0.4,
        end: 0.45,
      },
    },
  ],
}

const SliderColumn = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    let active = true
    fetch('https://g2plot.antv.vision/zh/examples/data/sales.json')
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

  return <ColumnChart {...config} data={data} />
}

export default SliderColumn
