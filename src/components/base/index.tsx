import React, {
  HTMLAttributes,
  forwardRef,
  useRef,
  useEffect,
  Ref,
  MutableRefObject,
  ReactElement,
  RefAttributes,
  useImperativeHandle,
} from 'react'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import { Plot as BasePlot } from '@antv/g2plot'

interface Options {
  [x: string]: any
}

type PickedAttrs = 'className' | 'style'

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

type ChartConfig = Omit<Options, 'data'>

export interface Plot<C extends Options> {
  new (container: HTMLElement, config: C): BasePlot<C>
}

const syncRef = <C extends Options>(
  source: MutableRefObject<BasePlot<C> | null>,
  target?: Ref<BasePlot<C> | null>
) => {
  /* istanbul ignore else */
  if (typeof target === 'function') {
    target(source.current)
  } else if (target) {
    ;(target as MutableRefObject<BasePlot<C> | null>).current = source.current
  }
}

export interface BaseChartProps<C extends Options>
  extends Pick<HTMLAttributes<HTMLDivElement>, PickedAttrs> {
  chart: Plot<C>
  chartRef?: Ref<BasePlot<C> | null>
  stateManager?: StateManagerCfg
}

const BaseChart = <C extends Options>(
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
  const chartRef = useRef<BasePlot<C> | null>(null)
  const configRef = useRef<ChartConfig>()
  const containerRef = useRef<HTMLDivElement>(null)
  const isFirstRenderRef = useRef<boolean>(true)
  const dataRef = useRef<Record<string, any>[]>([])

  useImperativeHandle(ref, () => containerRef.current)

  useEffect(() => {
    const { current: container } = containerRef
    /* istanbul ignore else */
    if (container) {
      const { data, ...config } = restProps as Options
      configRef.current = cloneDeep(config)
      const normalizedData = data || []
      dataRef.current = normalizedData
      const mergedConfig = {
        ...config,
        data: normalizedData,
      } as any
      chartRef.current = new Chart(container, mergedConfig)
      chartRef.current.render()
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
        const { data, ...config } = restProps as Options
        const normalizedData = data || []
        if (!isEqual(config, configRef.current) || !dataRef.current.length) {
          configRef.current = cloneDeep(config)
          const mergedConfig = {
            ...config,
            data: normalizedData,
          }

          chart.update(mergedConfig as any)
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

export default forwardRef(BaseChart) as <C extends Options>(
  p: BaseChartProps<C> & RefAttributes<HTMLDivElement | null>
) => ReactElement
