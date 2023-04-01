import { useState } from 'react'
import { useAtom } from 'jotai'
import axios from 'axios'

import { atomTaxpayerID } from '../context'

const Search = () => {
  const [taxpayerID, setTaxpayerID] = useAtom(atomTaxpayerID)
  const [isValidTaxpayerID, setIsValidTaxpayerID] = useState(false)


  const validate = (e) => {
    const intermediate = new RegExp('^\\d{0,9}$')
    const complete = new RegExp('^\\d{9}$')

    if (intermediate.test(e.target.value)) {
      setTaxpayerID(e.target.value)
      setIsValidTaxpayerID(complete.test(e.target.value))
    }
  }

  const auth = async (e) => {
    e.preventDefault()
    if (isValidTaxpayerID) {
      const api = axios.create({
        baseURL: 'http://localhost:3000'
      })

      try {
        const response = await api.post('/login', {
          inn: taxpayerID
        })
        if (response.data.is_ok) {
          console.log('Success')
        }
      } catch (error) {}
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10">
      <h1 className="text-4xl">Введите ИНН</h1>
      <form
        className="flex flex-col items-center justify-center gap-10"
        onSubmit={(e) => auth(e)}
      >
        <input
          className="w-[200px] h-[60px] p-6 border-black border text-3xl"
          value={taxpayerID}
          onChange={(e) => validate(e)}
          type="text"
        />
        {isValidTaxpayerID && (
          <button className="py-2 px-4 border-black border rounded text-3xl">
            Показать
          </button>
        )}
      </form>
    </div>
  )
}

export default Search
