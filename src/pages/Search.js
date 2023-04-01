import { useState } from 'react'
import axios from 'axios'

const Search = () => {
  const [number, setNumber] = useState('')
  const [isValidNumber, setIsValidNumber] = useState(false)

  const validate = (e) => {
    const intermediate = new RegExp('^\\d{0,9}$')
    const complete = new RegExp('^\\d{9}$')

    if (intermediate.test(e.target.value)) {
      setNumber(e.target.value)
      setIsValidNumber(complete.test(e.target.value))
    }
  }

  const auth = async (e) => {
    e.preventDefault()
    if (isValidNumber) {
      const api = axios.create({
        baseURL: 'http://localhost:3000'
      })

      try {
        const response = await api.post('/login', {
          inn: number
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
          value={number}
          onChange={(e) => validate(e)}
          type="text"
        />
        {isValidNumber && (
          <button className="py-2 px-4 border-black border rounded text-3xl">
            Показать
          </button>
        )}
      </form>
    </div>
  )
}

export default Search
