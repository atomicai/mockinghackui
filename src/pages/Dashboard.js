import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'

import api from '../api'
import { atomTaxpayerID } from '../context'
import CategoriesCharts from '../components/CategoriesCharts'

const Dashboard = () => {
  const [taxpayerID] = useAtom(atomTaxpayerID)

  return (
    <>
      <main className="h-screen flex flex-col items-center justify-top gap-16 p-4">
        <h1 className="text-4xl">{`Аналитика для ${taxpayerID}`}</h1>
        <CategoriesCharts />
      </main>
    </>
  )
}

export default Dashboard
