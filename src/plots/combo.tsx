import React, { HTMLAttributes } from 'react'
import omit from 'lodash/omit'
import ComboPlot, { ComboPlotConfig } from '@antv/g2plot/lib/combo-plots/base'

type PickedAttrs = 'className' | 'style'

interface Plot<
  T extends ComboPlot = ComboPlot,
  C extends ComboPlotConfig = ComboPlotConfig
> {
  new (container: HTMLElement, props: C): T
}

export interface ComboChartProps<
  T extends ComboPlot = ComboPlot,
  C extends ComboPlotConfig = ComboPlotConfig
> extends Pick<HTMLAttributes<HTMLDivElement>, PickedAttrs> {
  chart: Plot<T, C>
  onMount?: (chart: ComboPlot<C>) => void
}

export default class ComboChart<
  T extends ComboPlot = ComboPlot,
  C extends ComboPlotConfig = ComboPlotConfig
> extends React.Component<ComboChartProps<T, C>> {
  private el: HTMLDivElement | null = null
  private chart?: ComboPlot<C>
  private getContainer = (el: HTMLDivElement | null) => {
    this.el = el
  }

  private getConfig = (props: ComboChartProps<T, C>) => {
    return omit(props, ['style', 'className', 'chart', 'onMount']) as C
  }

  componentDidMount() {
    const { chart, onMount } = this.props
    const config = this.getConfig(this.props)
    const Chart = chart
    if (this.el) {
      this.chart = new Chart(this.el, config)
      this.chart.render()
      if (typeof onMount === 'function') {
        onMount(this.chart)
      }
    }
  }

  componentDidUpdate() {
    const config = this.getConfig(this.props)
    if (this.chart) {
      this.chart.updateConfig(config as any)
      this.chart.render()
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
