import { useState, useEffect } from 'react'

const colors = [
  { hex: '#e74c3c', name: 'Червоний' },
  { hex: '#3498db', name: 'Синій' },
  { hex: '#2ecc71', name: 'Зелений' },
  { hex: '#f39c12', name: 'Помаранчевий' },
  { hex: '#9b59b6', name: 'Фіолетовий' },
  { hex: '#ff6b9d', name: 'Рожевий' },
  { hex: '#1abc9c', name: 'Бірюзовий' },
  { hex: '#f1c40f', name: 'Жовтий' },
]

function ColorBlock() {
  const [colorIndex, setColorIndex] = useState(0)
  const current = colors[colorIndex]

  useEffect(() => {
    console.log('Поточний колір:', current.name, current.hex)
  }, [colorIndex])

  function handleColorChange() {
    setColorIndex(prevIndex => (prevIndex + 1) % colors.length)
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
      backgroundColor: '#111827',
      padding: '40px',
      borderRadius: '20px',
      border: '1px solid #1e3a5f',
      boxShadow: '0 4px 30px rgba(0, 80, 180, 0.2)',
    }}>

      {}
      <div style={{
        width: '220px',
        height: '220px',
        backgroundColor: current.hex,
        borderRadius: '20px',
        border: '3px solid #1e3a5f',
      }} />

      {}
      <p style={{
        color: '#7eb8f7',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        letterSpacing: '1px',
      }}>
        {current.name}
      </p>

   

      {}
      <button
        onClick={handleColorChange}
        style={{
          padding: '14px 40px',
          fontSize: '1rem',
          fontWeight: 'bold',
          color: '#ffffff',
          backgroundColor: '#1a3a6b',
          border: '2px solid #2a5298',
          borderRadius: '50px',
          cursor: 'pointer',
          letterSpacing: '1px',
        }}
      >
        Наступний колір
      </button>
    </div>
  )
}

export default ColorBlock