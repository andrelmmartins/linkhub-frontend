import { useState, useEffect } from 'react'

export function useDebounce(value: string, delay = 1000 * 1) { // debouce is using 1 second
  
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}