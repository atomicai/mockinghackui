import React, { useEffect, useState } from 'react'
import api from '../api'

export const ConversionRate = (id) => {
  const [conversionRate, setConversionRate] = useState([])

  useEffect(() => {
    const fetchConversionRate = async () => {
      if (id === '') {
        try {
          const response = await api.post('/conversionrate', {
            supplier_inn: id
          })
          setConversionRate(response.data)
        } catch (error) {}
      } else {
        try {
          const response = await api.get('/conversionrate')
          setConversionRate(response.data)
        } catch (error) {}
      }
    }
    fetchConversionRate()
  })

  return <div>{conversionRate}</div>
}
