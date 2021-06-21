import { useEffect } from 'react'
import { useState } from 'react'

export const useInput = (str = '', withError = false) => {
    const [value, setValue] = useState(str)
    const [isError, setError] = useState(false)
    useEffect(() => (!value ? setError(true) : setError(false)), [value])
    return withError
        ? {
              value,
              onChange: (e: any) => setValue(e.target.value),
              isError,
              clear: () => setValue(''),
          }
        : {
              value,
              onChange: (e: any) => setValue(e.target.value),
          }
}
