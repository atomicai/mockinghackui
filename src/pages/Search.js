import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAtom } from 'jotai'

import api from '../api'
import { atomTaxpayerID } from '../context'

const Search = () => {
  const [taxpayerID, setTaxpayerID] = useAtom(atomTaxpayerID)
  const [isValidTaxpayerID, setIsValidTaxpayerID] = useState(false)

  const navigate = useNavigate()

  const validate = (e) => {
    const intermediate = new RegExp('^\\d{0,12}$')
    const completeNatural = new RegExp('^\\d{10}$')
    const completeJuridical = new RegExp('^\\d{12}$')

    if (intermediate.test(e.target.value)) {
      setTaxpayerID(e.target.value)
      const isComplete =
        completeNatural.test(e.target.value) ||
        completeJuridical.test(e.target.value)
      setIsValidTaxpayerID(isComplete)
    }
  }

  const auth = async (e) => {
    e.preventDefault()
    if (isValidTaxpayerID) {
      try {
        const response = await api.post('/login', {
          inn: taxpayerID
        })
        navigate('/dashboard')
        if (response.data.is_ok) {
        }
      } catch (error) {}
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl">Введите ИНН</h1>
      <form
        className="h-[200px] flex flex-col items-center justify-top gap-8"
        onSubmit={(e) => auth(e)}
      >
        <input
          className="w-[250px] h-[60px] border-black border text-center text-3xl"
          value={taxpayerID}
          onChange={(e) => validate(e)}
          type="text"
        />
        {isValidTaxpayerID && (
          <button className="px-8 py-4 border-black border rounded text-3xl hover:shadow-md">
            Показать
          </button>
        )}
      </form>
    </div>
  )
}

export default Search
