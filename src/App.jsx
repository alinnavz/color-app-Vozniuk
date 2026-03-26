import ColorBlock from './ColorBlock'

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h1 style={{
        color: '#7eb8f7',
        fontSize: '2rem',
        marginBottom: '40px',
        letterSpacing: '2px',
      }}>
        Зміна кольору
      </h1>
      <ColorBlock />
    </div>
  )
}

export default App