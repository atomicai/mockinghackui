import { useEffect, useState } from 'react'

import api from '../api'

const AveragePrice = () => {
  const [averagePrice, setAveragePrice] = useState([])

  useEffect(() => {
    const fetchAveragePrice = async () => {
      try {
        const response = await api.post('/avg_price')
        setAveragePrice(response.data)
      } catch (error) {}
    }
    fetchAveragePrice()
  }, [])

  return <div>{averagePrice}</div>
}

export default AveragePrice
