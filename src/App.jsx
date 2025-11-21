import { useState, useRef } from 'react'
import DatePicker from './DatePicker'

function App() {
  const [birthDate, setBirthDate] = useState(null)
  const dateRef = useRef(null)

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f3f4f6',
      }}
    >
      <div
        style={{
          padding: '2rem',
          borderRadius: '1rem',
          background: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          width: '320px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <label htmlFor="birthdate" style={{ fontWeight: 500 }}>
          Date of Birth
        </label>

        <div style={{ position: 'relative', width: '100%' }}>
          <DatePicker
            className="plugin-datepicker__input"
            ref={dateRef}
            value={birthDate}
            onChange={setBirthDate}
          />

          <button onClick={() => setBirthDate(new Date(2000, 0, 1))}>
            Mettre 01/01/2000
          </button>

          <button onClick={() => setBirthDate(null)}>Reset</button>
        </div>

        <p style={{ fontSize: '0.9rem', color: '#555' }}>
          Date choisie :{' '}
          {birthDate ? birthDate.toLocaleDateString('fr-FR') : 'aucune'}
        </p>
      </div>
    </div>
  )
}

export default App
