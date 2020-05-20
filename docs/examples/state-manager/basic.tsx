import React from 'react'
import {
  StateManagerProvider,
  StackedAreaChart,
  StackedBarChart,
  DonutChart,
} from '@opd/g2plot-react'

const sales = [
  { area: '华东', cat: '家具', count: 1029 },
  { area: '华东', cat: '技术', count: 963 },
  { area: '华东', cat: '办公用品', count: 2596 },
  { area: '中南', cat: '家具', count: 905 },
  { area: '中南', cat: '技术', count: 848 },
  { area: '中南', cat: '办公用品', count: 2452 },
  { area: '东北', cat: '家具', count: 603 },
  { area: '东北', cat: '技术', count: 582 },
  { area: '东北', cat: '办公用品', count: 1414 },
  { area: '华北', cat: '家具', count: 512 },
  { area: '华北', cat: '技术', count: 388 },
  { area: '华北', cat: '办公用品', count: 1428 },
  { area: '西南', cat: '家具', count: 398 },
  { area: '西南', cat: '技术', count: 366 },
  { area: '西南', cat: '办公用品', count: 999 },
  { area: '西北', cat: '家具', count: 257 },
  { area: '西北', cat: '技术', count: 194 },
  { area: '西北', cat: '办公用品', count: 523 },
]

const manager = [
  { area: '华东', name: '洪光', bill: 4588, sale: 7924453 },
  { area: '中南', name: '范彩', bill: 4205, sale: 6715442 },
  { area: '东北', name: '楚杰', bill: 2598, sale: 4074576 },
  { area: '华北', name: '殷莲', bill: 2148, sale: 3614068 },
  { area: '西南', name: '白德伟', bill: 1763, sale: 2879904 },
  { area: '西北', name: '杨健', bill: 974, sale: 1690889 },
]

const trend = [
  { time: '2016季1', area: '华东', value: 238477 },
  { time: '2016季1', area: '中南', value: 97700 },
  { time: '2016季1', area: '东北', value: 133526 },
  { time: '2016季1', area: '华北', value: 82014 },
  { time: '2016季1', area: '西南', value: 104907 },
  { time: '2016季1', area: '西北', value: 42752 },

  { time: '2016季2', area: '东北', value: 77127 },
  { time: '2016季2', area: '华北', value: 192508 },
  { time: '2016季2', area: '华东', value: 154431 },
  { time: '2016季2', area: '西北', value: 45222 },
  { time: '2016季2', area: '中南', value: 72768 },
  { time: '2016季2', area: '西南', value: 212498 },

  { time: '2016季3', area: '东北', value: 171283 },
  { time: '2016季3', area: '华北', value: 140033 },
  { time: '2016季3', area: '华东', value: 297862 },
  { time: '2016季3', area: '西北', value: 42819 },
  { time: '2016季3', area: '中南', value: 119364 },
  { time: '2016季3', area: '西南', value: 380932 },

  { time: '2016季4', area: '东北', value: 353119 },
  { time: '2016季4', area: '华北', value: 262622 },
  { time: '2016季4', area: '华东', value: 304962 },
  { time: '2016季4', area: '西北', value: 56318 },
  { time: '2016季4', area: '中南', value: 57297 },
  { time: '2016季4', area: '西南', value: 271741 },

  { time: '2017季1', area: '东北', value: 211428 },
  { time: '2017季1', area: '华北', value: 60705 },
  { time: '2017季1', area: '华东', value: 233148 },
  { time: '2017季1', area: '西北', value: 34730 },
  { time: '2017季1', area: '中南', value: 264505 },
  { time: '2017季1', area: '西南', value: 202804 },

  { time: '2017季2', area: '东北', value: 101513 },
  { time: '2017季2', area: '华北', value: 119662 },
  { time: '2017季2', area: '华东', value: 858747 },
  { time: '2017季2', area: '西北', value: 281985 },
  { time: '2017季2', area: '中南', value: 94728 },
  { time: '2017季2', area: '西南', value: 561100 },

  { time: '2017季3', area: '东北', value: 159517 },
  { time: '2017季3', area: '华北', value: 118773 },
  { time: '2017季3', area: '华东', value: 419260 },
  { time: '2017季3', area: '西北', value: 20558 },
  { time: '2017季3', area: '中南', value: 91995 },
  { time: '2017季3', area: '西南', value: 364894 },

  { time: '2017季4', area: '东北', value: 272273 },
  { time: '2017季4', area: '华北', value: 225966 },
  { time: '2017季4', area: '华东', value: 458239 },
  { time: '2017季4', area: '西北', value: 51405 },
  { time: '2017季4', area: '中南', value: 123077 },
  { time: '2017季4', area: '西南', value: 380703 },

  { time: '2018季1', area: '东北', value: 190567 },
  { time: '2018季1', area: '华北', value: 80122 },
  { time: '2018季1', area: '华东', value: 223720 },
  { time: '2018季1', area: '西北', value: 157845 },
  { time: '2018季1', area: '中南', value: 60343 },
  { time: '2018季1', area: '西南', value: 98810 },

  { time: '2018季2', area: '东北', value: 161600 },
  { time: '2018季2', area: '华北', value: 291271 },
  { time: '2018季2', area: '华东', value: 745563 },
  { time: '2018季2', area: '西北', value: 61357 },
  { time: '2018季2', area: '中南', value: 116789 },
  { time: '2018季2', area: '西南', value: 475978 },

  { time: '2018季3', area: '东北', value: 267974 },
  { time: '2018季3', area: '华北', value: 206705 },
  { time: '2018季3', area: '华东', value: 639616 },
  { time: '2018季3', area: '西北', value: 73518 },
  { time: '2018季3', area: '中南', value: 97838 },
  { time: '2018季3', area: '西南', value: 319745 },
]

const stackedBarConfig = {
  title: {
    visible: true,
    text: '地区销量',
  },
  data: sales,
  xField: 'count',
  yField: 'area',
  stackField: 'cat',
  tooltip: {
    visible: false,
  },
  color: ['#945fb9', '#1e9493', '#ff9845'],
}

const donutConfig = {
  title: {
    visible: true,
    text: '地区经理业绩',
  },
  data: manager,
  angleField: 'bill',
  colorField: 'area',
  label: {
    visible: false,
  },
  radius: 0.9,
  annotation: [{ type: 'centralText', onActive: true }],
}

const areaConfig = {
  title: {
    visible: true,
    text: '地区销售趋势',
  },
  data: trend,
  xField: 'time',
  yField: 'value',
  stackField: 'area',
  tooltip: {
    visible: false,
  },
  yAxis: {
    visible: true,
    tickCount: 4,
    label: {
      visible: true,
      formatter: (v) => {
        return Math.floor(v / 1000) + 'k'
      },
    },
  },
  responsive: true,
}

export default () => {
  return (
    <StateManagerProvider>
      <div>
        <div style={{ display: 'flex' }}>
          <StackedBarChart
            {...stackedBarConfig}
            stateManager={{
              setState: [
                {
                  event: 'bar:click',
                  state: (e) => {
                    const origin = e.target.get('origin').data
                    const state = { name: 'area', exp: origin.area }
                    return state
                  },
                },
              ],
              onStateChange: [
                {
                  name: 'area',
                  callback: (d, plot) => {
                    plot.setSelected(d, {
                      stroke: 'black',
                      lineWidth: 1,
                    })
                    plot.setDefault(
                      (origin) => {
                        return origin[d.name] !== d.exp
                      },
                      {
                        stroke: null,
                      }
                    )
                  },
                },
              ],
            }}
          />
          <DonutChart
            {...donutConfig}
            stateManager={{
              setState: [
                {
                  event: 'ring:click',
                  state: (e: any) => {
                    const origin = e.target.get('origin').data
                    const state = { name: 'area', exp: origin.area }
                    return state
                  },
                },
              ],
              onStateChange: [
                {
                  name: 'area',
                  callback: (d, plot) => {
                    plot.setSelected(d, {
                      strokeStyle: '#000000',
                      lineWidth: 1,
                    })
                    plot.setDefault(
                      (origin) => {
                        return origin[d.name] !== d.exp
                      },
                      {
                        stroke: null,
                      }
                    )
                  },
                },
              ],
            }}
          />
        </div>
        <StackedAreaChart
          {...areaConfig}
          stateManager={{
            setState: [
              {
                event: 'area:click',
                state: (e) => {
                  const origin = e.target.get('origin').data[0]
                  const state = { name: 'area', exp: origin.area }
                  return state
                },
              },
            ],
            onStateChange: [
              {
                name: 'area',
                callback: (d, plot) => {
                  plot.setSelected(d, {
                    fillOpacity: 1,
                    strokeOpacity: 1,
                    opacity: 1,
                  })
                  plot.setDisable(
                    (origin) => {
                      return origin[d.name] !== d.exp
                    },
                    {
                      fillOpacity: 0.2,
                      strokeOpacity: 0,
                      opacity: 1,
                    }
                  )
                },
              },
            ],
          }}
        />
      </div>
    </StateManagerProvider>
  )
}
