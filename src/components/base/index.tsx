import React, { HTMLAttributes } from 'react'
import omit from 'lodash/omit'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import {
  Base as BasePlot,
  ViewLayer,
  PlotConfig,
  StateManager,
} from '@antv/g2plot'
import { StateManagerContext } from '../state-manager'

type PickedAttrs = 'className' | 'style'

export type LayerCtor<C> = ViewLayer<C>

type ExpCbFunc = (...args: any[]) => any

interface ManagerStateCfg {
  name: string
  exp: string | number | ExpCbFunc
}

type StateExp = ManagerStateCfg | ManagerStateCfg

interface ManagerState {
  event?: string
  state: StateExp
}

interface StateChangeObj {
  name: string
  callback: (...args: any[]) => any
}

interface StateManagerCfg {
  setState?: ManagerState[]
  onStateChange?: StateChangeObj[]
}

export interface Plot<C extends PlotConfig = PlotConfig> {
  new (container: HTMLElement, props: C): BasePlot<C, LayerCtor<C>>
}

export interface BaseChartProps<C extends PlotConfig = PlotConfig>
  extends Pick<HTMLAttributes<HTMLDivElement>, PickedAttrs> {
  chart: Plot<C>
  onMount?: (chart: BasePlot<C, LayerCtor<C>>) => void
  stateManager?: StateManagerCfg
}

export default class BaseChart<
  C extends PlotConfig = PlotConfig
> extends React.Component<BaseChartProps<C>> {
  private el: HTMLDivElement | null = null
  private chart?: BasePlot<C, LayerCtor<C>> | null
  private config?: any
  private getContainer = (el: HTMLDivElement | null) => {
    this.el = el
  }

  context!: StateManager

  private getConfig = (props: BaseChartProps<C>) => {
    return omit(props, [
      'style',
      'className',
      'chart',
      'onMount',
      'stateManager',
      'data',
    ]) as C
  }

  static contextType = StateManagerContext

  componentDidMount() {
    const { chart, onMount, stateManager } = this.props
    const config = this.getConfig(this.props)
    const Chart = chart
    const { data, ...restConfig } = config as any
    this.config = cloneDeep(restConfig)
    if (this.el) {
      this.chart = new Chart(this.el, config)
      this.chart.render()
      if (typeof onMount === 'function') {
        onMount(this.chart)
      }

      if (this.context && stateManager) {
        // TODO: set cfg
        this.chart.bindStateManager(this.context, stateManager)
      }
    }
  }

  componentDidUpdate() {
    const config = this.getConfig(this.props)
    const { data, ...restConfig } = config as any
    const isConfigChanged = !isEqual(this.config, restConfig)

    /* istanbul ignore else */
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
