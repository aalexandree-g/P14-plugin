import { useEffect, useRef } from 'react'
import moment from 'moment'
import Pikaday from 'pikaday'
import 'pikaday/css/pikaday.css'

const DatePicker = ({
  id = 'hrnet-datepicker',
  placeholder = 'Pick a date',
  format = 'DD/MM/YYYY',
  className,
  value,
  onChange,
}) => {
  const inputRef = useRef(null)
  const pikadayRef = useRef(null)

  useEffect(() => {
    if (!inputRef.current) return

    pikadayRef.current = new Pikaday({
      field: inputRef.current,
      toString(date) {
        return date ? moment(date).format(format) : ''
      },
      parse(value) {
        return moment(value, format).toDate()
      },
      onSelect: (date) => {
        if (onChange) {
          onChange(date)
        }
      },
    })

    return () => {
      pikadayRef.current?.destroy()
    }
  }, [onChange, format])

  useEffect(() => {
    if (!pikadayRef.current || !inputRef.current) return

    if (value instanceof Date) {
      pikadayRef.current.setDate(value, true)
    } else {
      inputRef.current.value = ''
    }
  }, [value])

  return (
    <input
      id={id}
      ref={inputRef}
      type="text"
      className={className}
      placeholder={placeholder}
      readOnly
    />
  )
}

export default DatePicker
