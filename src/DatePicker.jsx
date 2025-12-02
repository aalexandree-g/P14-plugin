import { useEffect, useRef } from 'react'
import moment from 'moment'
import Pikaday from 'pikaday'
import 'pikaday/css/pikaday.css'

/**
 * DatePicker component.
 *
 * A React wrapper around the Pikaday date picker library.
 * Initializes Pikaday on mount, syncs its selected value with the parent component,
 * and formats/parses dates using Moment.js.
 *
 * This component renders a read-only `<input>` element managed by Pikaday,
 * and communicates the selected date to the parent via the `onChange` callback.
 *
 * @component
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.id="hrnet-datepicker"] - The HTML id for the input field.
 * @param {string} [props.className] - Optional CSS class applied to the input element.
 * @param {Date|null} props.value - The currently selected date. When changed, Pikaday updates accordingly.
 * @param {string} [props.format="DD/MM/YYYY"] - Date format used by Moment.js for display and parsing.
 * @param {(date: Date|null) => void} props.onChange - Callback fired when the user selects a date.
 * @param {string} [props.placeholder="Pick a date"] - Placeholder text shown in the input.
 *
 * @returns {JSX.Element} A read-only text input enhanced by the Pikaday date picker.
 */
const DatePicker = ({
  id = 'hrnet-datepicker',
  className,
  value,
  format = 'DD/MM/YYYY',
  onChange,
  placeholder = 'Pick a date',
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
      className={className}
      ref={inputRef}
      type="text"
      placeholder={placeholder}
      readOnly
    />
  )
}

export default DatePicker
