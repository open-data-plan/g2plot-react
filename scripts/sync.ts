import * as g2plot from '@antv/g2plot'
import * as g2plotReact from '../src'
import path from 'path'
import fs from 'fs'
import { promisify } from 'util'
import { ESLint } from 'eslint'
import decamelize from 'decamelize'

console.log('Sync start')

const mkdir = promisify(fs.mkdir)
const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)

const eslint = new ESLint({
  extensions: ['.tsx'],
  baseConfig: {
    extends: ['@opd/eslint-config-pangu'],
  },
  fix: true,
})

const plotDir = path.resolve(process.cwd(), 'src/plots')
const testDir = path.resolve(process.cwd(), '__tests__/plots')
const exportPath = path.resolve(process.cwd(), 'src/index.tsx')

const { Plot } = g2plot

// const staticProperties = ['length', 'name', 'prototype']

// const labCharts = Object.getOwnPropertyNames(Lab).filter((property) =>
//   /^[A-Z]/.test(property)
// )

// console.log(labCharts)

const newCharts: string[] = []

Object.entries(g2plot).forEach(([chartName, module]: [string, any]) => {
  try {
    if (module.prototype instanceof Plot && chartName !== 'P') {
      const chartModuleName = chartName + 'Chart'
      if (!(g2plotReact as any)[chartModuleName]) {
        newCharts.push(chartName)
      }
    }
  } catch (error) {}
})

if (newCharts.length) {
  console.log('Follow charts will be added:')
  console.log(newCharts.join(''))
} else {
  console.log('No new charts found')
}

const lintAndFixFileContent = async (fileContent: string, filePath: string) => {
  const lintResult = await eslint.lintText(fileContent, {
    filePath,
  })

  const { output } = lintResult[0]

  return output || fileContent
}

const getChartConfig = (chart: string) => {
  return {
    cmpName: `${chart}Chart`,
    cmpPath: decamelize(chart, '-'),
  }
}

const createComponents = async () => {
  const promises = newCharts.map(async (chart) => {
    const cmp = `
    import React, { forwardRef } from 'react'
    import { ${chart}, ${chart}Options } from '@antv/g2plot'
    import BaseChart, { BaseChartProps } from '../../components/base'

    export type ${chart}ChartProps = Omit<BaseChartProps<${chart}Options>, 'chart'> &
      ${chart}Options

    const ${chart}Chart = forwardRef<HTMLDivElement | null, ${chart}ChartProps>(
      (props, ref) => {
        return <BaseChart chart={${chart}} ref={ref} {...props} />
      }
    )

    export default ${chart}Chart
    `

    const { cmpPath } = getChartConfig(chart)
    const dir = path.resolve(plotDir, cmpPath)
    await mkdir(dir)
    const filePath = path.resolve(dir, `index.tsx`)
    const fixedContent = await lintAndFixFileContent(cmp, filePath)

    await writeFile(filePath, fixedContent, {
      encoding: 'utf8',
    })
  })

  await Promise.all(promises)
}

const addExport = async () => {
  let exportFileContent = await readFile(exportPath, {
    encoding: 'utf8',
  })

  newCharts.forEach((chart) => {
    const chartName = chart + 'Chart'
    const { cmpPath } = getChartConfig(chart)
    const importPath = `./plots/${cmpPath}`

    const content = `
      import { ${chartName}Props as _${chartName}Props } from '${importPath}'
    \nexport { default as ${chartName} } from '${importPath}'
      export type ${chartName}Props = _${chartName}Props
    `

    exportFileContent += content
  })

  const fixedContent = await lintAndFixFileContent(
    exportFileContent,
    exportPath
  )

  writeFile(exportPath, fixedContent, {
    encoding: 'utf8',
  })
}

const createTestCases = async () => {
  const promises = newCharts.map(async (chart) => {
    const { cmpPath } = getChartConfig(chart)
    const cmp = `
    import React from 'react'
    import { create } from 'react-test-renderer'
    import ${chart}Chart from '../../src/plots/${cmpPath}'

    describe('${chart}Chart', () => {
      test('should render without crashed', () => {
        const renderer = create(<${chart}Chart data={[]} />)

        expect(renderer.toJSON()).toMatchSnapshot()
      })
    })
    `

    const filePath = path.resolve(testDir, `${cmpPath}.spec.tsx`)
    const fixedContent = await lintAndFixFileContent(cmp, filePath)

    await writeFile(filePath, fixedContent, {
      encoding: 'utf8',
    })
  })

  await Promise.all(promises)
}

const start = async () => {
  await Promise.all([createComponents(), addExport(), createTestCases()])
  console.log('Sync done')
}

start()
