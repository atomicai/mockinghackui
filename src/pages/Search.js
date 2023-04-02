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
    <div className="h-screen flex flex-col items-center justify-center gap-10">
      <h1 className="text-4xl">Введите ИНН</h1>
      <form
        className="flex flex-col items-center justify-center gap-10"
        onSubmit={(e) => auth(e)}
      >
        <input
          className="w-[250px] h-[60px] p-6 border-black border text-3xl"
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
