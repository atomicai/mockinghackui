import { useEffect, useState } from 'react'

import api from '../api'

export const AveragePrice = (id) => {
  const [averagePrice, setAveragePrice] = useState([])

  useEffect(() => {
    const fetchAveragePrice = async () => {
      if (id === '') {
        try {
          const response = await api.post('/avg_price', {
            supplier_inn: id
          })
          setAveragePrice(response.data)
        } catch (error) {}
      } else {
        try {
          const response = await api.get('/avg_price')
          setAveragePrice(response.data)
        } catch (error) {}
      }
    }
    fetchAveragePrice()
  }, [])

  return <div>{averagePrice}</div>
}
