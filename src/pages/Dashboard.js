import { useAtom } from 'jotai'

import { atomTaxpayerID } from '../context'
import CategoriesCharts from '../components/CategoriesCharts'
import AveragePrice from '../components/AveragePrice'

const Dashboard = () => {
  const [taxpayerID] = useAtom(atomTaxpayerID)

  return (
    <>
      <main className="h-screen flex flex-col items-center justify-top gap-16 p-4">
        <h1 className="text-4xl">{`Аналитика для ${taxpayerID}`}</h1>
        <CategoriesCharts />
        <AveragePrice />
      </main>
    </>
  )
}

export default Dashboard
