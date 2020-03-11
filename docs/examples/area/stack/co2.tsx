import React, { useState, useEffect } from 'react'
import { StackAreaChart } from '@opd/g2plot-react'
import { StackAreaConfig } from '@antv/g2plot'

const config: StackAreaConfig = {
  title: {
    visible: true,
    text: 'The causes of CO2 emissions',
  },
  padding: 'auto',
  xField: 'year',
  yField: 'value',
  seriesField: 'category',
  xAxis: {
    type: 'time',
    // eslint-disable-next-line
    // @ts-ignore
    mask: 'YYYY',
  },
  yAxis: {
    label: {
      // 数值格式化为千分位
      formatter: v => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, s => `${s},`),
    },
  },
  responsive: true,
}

const BasicStackArea = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    let active = true
    fetch('https://g2plot.antv.vision/zh/examples/data/emissions.json')
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

export default BasicStackArea
