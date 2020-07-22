import React, {
  HTMLAttributes,
  forwardRef,
  useRef,
  useContext,
  useEffect,
  Ref,
  MutableRefObject,
  ReactElement,
  RefAttributes,
  useImperativeHandle,
} from 'react'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import {
  Base as BasePlot,
  ViewLayer,
  PlotConfig,
  ViewConfig,
  DataItem,
} from '@antv/g2plot'
import { StateManagerContext } from '../state-manager'
import { RecursivePartial } from '@antv/g2plot/lib/interface/types'

type PickedAttrs = 'className' | 'style'

export type LayerCtor<C> = ViewLayer<C>

type ExpCbFunc = (...args: any[]) => any

interface ManagerStateCfg {
  name: string
  exp: string | number | ExpCbFunc
}

type StateExp = ManagerStateCfg | ExpCbFunc

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

interface ChartConfig extends PlotConfig, ViewConfig {}

export interface Plot<C extends PlotConfig> {
  new (container: HTMLElement, config: C): BasePlot<C, LayerCtor<C>>
}

const syncRef = <C extends PlotConfig>(
  source: MutableRefObject<BasePlot<C, LayerCtor<C>> | null>,
  target?: Ref<BasePlot<C, LayerCtor<C>> | null>
) => {
  /* istanbul ignore else */
  if (typeof target === 'function') {
    target(source.current)
  } else if (target) {
    ;(target as MutableRefObject<BasePlot<C, LayerCtor<C>> | null>).current =
      source.current
  }
}

export interface BaseChartProps<C extends PlotConfig>
  extends Pick<HTMLAttributes<HTMLDivElement>, PickedAttrs> {
  chart: Plot<C>
  chartRef?: Ref<BasePlot<C, LayerCtor<C>> | null>
  stateManager?: StateManagerCfg
}

const BaseChart = <C extends PlotConfig>(
  props: BaseChartProps<C>,
  ref?: Ref<HTMLDivElement | null>
) => {
  const {
    chart: Chart,
    stateManager: stateManagerCfg,
    style,
    className,
    chartRef: chart,
    ...restProps
  } = props
  const chartRef = useRef<BasePlot<C, LayerCtor<C>> | null>(null)
  const configRef = useRef<ChartConfig>()
  const containerRef = useRef<HTMLDivElement>(null)
  const stateManager = useContext(StateManagerContext)
  const isFirstRenderRef = useRef<boolean>(true)
  const dataRef = useRef<DataItem[]>([])

  useImperativeHandle(ref, () => containerRef.current)

  useEffect(() => {
    const { current: container } = containerRef
    /* istanbul ignore else */
    if (container) {
      const { data, ...config } = restProps as ChartConfig
      configRef.current = cloneDeep(config)
      const normalizedData = data || []
      dataRef.current = normalizedData
      const mergedConfig = {
        ...config,
        data: normalizedData,
      } as any
      chartRef.current = new Chart(container, mergedConfig)
      chartRef.current.render()
      /* istanbul ignore else */
      if (stateManager && stateManagerCfg) {
        chartRef.current.bindStateManager(stateManager, stateManagerCfg)
      }
    }
    syncRef(chartRef, chart)
    return () => {
      /* istanbul ignore else */
      if (chartRef.current) {
        chartRef.current.destroy()
        chartRef.current = null
        syncRef(chartRef, chart)
      }
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const { current: chart } = chartRef
    /* istanbul ignore else */
    if (chart) {
      // avoid update in first time
      if (!isFirstRenderRef.current) {
        const { data, ...config } = restProps as ChartConfig
        const normalizedData = data || []
        if (!isEqual(config, configRef.current) || !dataRef.current.length) {
          configRef.current = cloneDeep(config)
          const mergedConfig = {
            ...config,
            data: normalizedData,
          } as RecursivePartial<C>
          chart.updateConfig(mergedConfig)
          chart.render()
        } else {
          chart.changeData(normalizedData)
        }
        dataRef.current = normalizedData
      } else {
        isFirstRenderRef.current = false
      }
    }
  }, [restProps])

  return <div style={style} className={className} ref={containerRef} />
}

export default forwardRef(BaseChart) as <C extends PlotConfig>(
  p: BaseChartProps<C> & RefAttributes<HTMLDivElement | null>
) => ReactElement
