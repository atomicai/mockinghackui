import { useAtom } from 'jotai'

import { atomTaxpayerID } from '../context'

const Dashboard = () => {
  const [taxpayerID] = useAtom(atomTaxpayerID)
  return (
    <h1 className="h-screen flex items-center justify-center text-4xl">
      {`Аналитика для ${taxpayerID}`}
    </h1>
  )
}

export default Dashboard
