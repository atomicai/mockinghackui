import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { uid } from 'uid'

import api from '../api'

import { categoriesMocked } from '../dataMocked'

const CategoriesCharts = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.post(
          '/viewing_category_topk',
          categoriesMocked
        )
        setCategories(response.data)
      } catch (error) {}
    }
    fetchCategories()
  }, [])

  const categoriesMetrics = [
    {
      name: 'Показатель #1 по категориям',
      x: categories.map((category) => category.name),
      y: categories.map((category) => category.metrics.foo)
    },
    {
      name: 'Показатель #2 по категориям',
      x: categories.map((category) => category.name),
      y: categories.map((category) => category.metrics.bar)
    }
  ]

  const categoriesCharts = categoriesMetrics.map((categoriesMetric) => (
    <div className="flex flex-col items-center justify-top gap-4" key={uid()}>
      <h2 className="text-2xl">{categoriesMetric.name}</h2>
      <Chart
        type="bar"
        series={[{ data: categoriesMetric.y }]}
        options={{
          plotOptions: {
            bar: { columnWidth: '75%', borderRadius: 10 }
          },
          tooltip: {
            enabled: false
          },
          xaxis: {
            categories: categoriesMetric.x
          }
        }}
        width="500"
        height="400"
      />
    </div>
  ))

  return <div className="grid grid-cols-2 gap-32">{categoriesCharts}</div>
}

export default CategoriesCharts
