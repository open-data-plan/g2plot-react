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
  RefCallback,
} from 'react'
import isEqual from 'lodash/isEqual'
import isEmpty from 'lodash/isEmpty'
import cloneDeep from 'lodash/cloneDeep'
import { Plot as BasePlot } from '@antv/g2plot'

interface Options {
  [x: string]: any
}

type PickedAttrs = 'className' | 'style'

type ChartConfig = Omit<Options, 'data'>

export interface Plot<C extends Options> {
  new (container: HTMLElement, config: C): BasePlot<C>
}

const syncRef = <C extends Options>(
  source: MutableRefObject<BasePlot<C> | null>,
  target?:
    | RefCallback<BasePlot<C> | null>
    | MutableRefObject<BasePlot<C> | null>
) => {
  /* istanbul ignore else */
  if (typeof target === 'function') {
    target(source.current)
  } else if (target) {
    target.current = source.current
  }
}

export interface BaseChartProps<C extends Options>
  extends Pick<HTMLAttributes<HTMLDivElement>, PickedAttrs> {
  /**
   * Plot Class
   * @note Internal use, should not use directly
   */
  chart: Plot<C>
  /**
   * Plot Ref
   */
  chartRef?:
    | RefCallback<BasePlot<C> | null>
    | MutableRefObject<BasePlot<C> | null>
  data?: Record<string, any> | Record<string, any>[]
  onReady?: (plot: BasePlot<C>) => void
}

const BaseChart = <C extends Options>(
  props: BaseChartProps<C>,
  ref?: Ref<HTMLDivElement | null>
) => {
  const {
    chart: Chart,
    style,
    className,
    chartRef: chart,
    onReady,
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
    if (chartRef.current) {
      onReady?.(chartRef.current)
    }
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
        if (!isEqual(config, configRef.current) || isEmpty(dataRef.current)) {
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
