import React, { FC, useRef, useEffect } from 'react'
import { autoChart, AutoChartOptions } from '@antv/chart-advisor'

export interface AVAProps extends AutoChartOptions {
  data: any[]
}

const AVA: FC<AVAProps> = props => {
  const container = useRef<HTMLDivElement>(null)
  useEffect(() => {
    /* istanbul ignore else */
    if (container.current) {
      const { data, ...config } = props
      autoChart(container.current, data, config)
    }
  }, [props])
  return <div ref={container} />
}

export default AVA
