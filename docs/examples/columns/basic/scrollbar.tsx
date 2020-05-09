import React, { useState, useEffect } from 'react'
import { ColumnChart } from '@opd/g2plot-react'
import { ColumnConfig } from '@antv/g2plot'

const config: ColumnConfig = {
  title: {
    visible: true,
    text: '基础柱状图-滚动条',
  },
  description: {
    visible: true,
    text: '当数据过多时，推荐使用滚动条一次只浏览一部分数据。',
  },
  forceFit: true,
  padding: 'auto',
  xField: '城市',
  xAxis: {
    visible: true,
    label: {
      autoHide: true,
    },
  },
  yAxis: {
    visible: true,
    label: {
      visible: true,
      formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
    },
  },
  yField: '销售额',
  interactions: [
    {
      type: 'scrollbar',
      cfg: {},
    },
  ],
}

const ColumnWithScrollbar = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    let active = true
    fetch('https://g2plot.antv.vision/zh/examples/data/sales.json')
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

  return <ColumnChart {...config} data={data} />
}

export default ColumnWithScrollbar
