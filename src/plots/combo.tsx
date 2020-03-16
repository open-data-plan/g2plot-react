import React, { HTMLAttributes } from 'react'
import omit from 'lodash/omit'
import ComboPlot, { ComboPlotConfig } from '@antv/g2plot/lib/combo-plots/base'

type PickedAttrs = 'className' | 'style'

interface Plot<C extends ComboPlotConfig = ComboPlotConfig> {
  new (container: HTMLElement, props: C): ComboPlot<C>
}

export interface ComboChartProps<C extends ComboPlotConfig = ComboPlotConfig>
  extends Pick<HTMLAttributes<HTMLDivElement>, PickedAttrs> {
  chart: Plot<C>
  onMount?: (chart: ComboPlot<C>) => void
}

export default class ComboChart<
  C extends ComboPlotConfig = ComboPlotConfig
> extends React.Component<ComboChartProps<C>> {
  private el: HTMLDivElement | null = null
  private chart?: ComboPlot<C> | null = null
  private getContainer = (el: HTMLDivElement | null) => {
    this.el = el
  }

  private getConfig = (props: ComboChartProps<C>) => {
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
    /* istanbul ignore else */
    if (this.chart) {
      this.chart.updateConfig(config as any)
      this.chart.render()
    }
  }

  componentWillUnmount() {
    /* istanbul ignore else */
    if (this.chart) {
      this.chart.destroy()
      this.chart = null
    }
  }

  render() {
    const { style, className } = this.props
    return <div ref={this.getContainer} className={className} style={style} />
  }
}
