import React, { useState, useEffect } from 'react'
import { AreaChart } from '@opd/g2plot-react'
import { AreaConfig } from '@antv/g2plot'

const config: AreaConfig = {
  title: {
    visible: true,
    text: '基础面积图 - 缩略轴',
  },
  description: {
    visible: true,
    text:
      '缩略轴 (slider) 交互适用于数据较多，用户希望关注数据集中某个特殊区间的场景。',
  },
  xField: '城市',
  xAxis: {
    visible: true,
    autoHideLabel: true,
  },
  yField: '销售额',
  yAxis: {
    label: {
      // 数值格式化为千分位
      formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
    },
  },
  interactions: [
    {
      type: 'slider',
      cfg: {
        start: 0.5,
        end: 0.55,
      },
    },
  ],
}

const SliderArea = () => {
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

  return <AreaChart {...config} data={data} />
}

export default SliderArea
