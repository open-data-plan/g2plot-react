import React, { HTMLAttributes } from 'react'
import omit from 'lodash/omit'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import BasePlot, { PlotConfig } from '@antv/g2plot/lib/base/plot'

type PickedAttrs = 'className' | 'style'

interface Plot<
  T extends BasePlot = BasePlot,
  C extends PlotConfig = PlotConfig
> {
  new (container: HTMLElement, props: C): T
}

export interface BaseChartProps<
  T extends BasePlot = BasePlot,
  C extends PlotConfig = PlotConfig
> extends Pick<HTMLAttributes<HTMLDivElement>, PickedAttrs> {
  chart: Plot<T, C>
}

export default class BaseChart<
  T extends BasePlot = BasePlot,
  C extends PlotConfig = PlotConfig
> extends React.Component<BaseChartProps<T, C>> {
  private el: HTMLDivElement | null = null
  private chart?: BasePlot<C>
  private config?: any
  private getContainer = (el: HTMLDivElement | null) => {
    this.el = el
  }

  private getConfig = (props: BaseChartProps<T, C>) => {
    return omit(props, ['style', 'className', 'chart']) as C
  }

  componentDidMount() {
    const { chart } = this.props
    const config = this.getConfig(this.props)
    const Chart = chart
    const { data, ...restConfig } = config as any
    this.config = cloneDeep(restConfig)
    if (this.el) {
      this.chart = new Chart(this.el, config)
      this.chart.render()
    }
  }

  componentDidUpdate() {
    const config = this.getConfig(this.props)
    const { data, ...restConfig } = config as any
    const isConfigChanged = !isEqual(this.config, restConfig)
    if (this.chart) {
      if (isConfigChanged) {
        this.config = cloneDeep(restConfig)
        this.chart.updateConfig(config as any)
        this.chart.render()
      } else {
        this.chart.changeData(data)
      }
    }
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy()
    }
  }

  render() {
    const { style, className } = this.props
    return <div ref={this.getContainer} className={className} style={style} />
  }
}
