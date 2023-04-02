import { useAtom } from 'jotai'

import { atomTaxpayerID } from '../context'

import { AveragePrice } from '../components/AveragePrice'
import { ConversionRate } from '../components/ConversionRate'

const Dashboard = () => {
  const [taxpayerID] = useAtom(atomTaxpayerID)

  return (
    <>
      <main className="h-screen flex flex-col items-center justify-top gap-16 p-4">
        <h1 className="text-4xl">
          {' '}
          {taxpayerID === ''
            ? 'Общая аналитика'
            : `Аналитика для ${taxpayerID}`}
        </h1>

        <AveragePrice id={taxpayerID} />

        <ConversionRate id={taxpayerID} />
      </main>
    </>
  )
}

export default Dashboard
