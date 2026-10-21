import { useEffect, useState } from 'react'

function App(){
  const [status, setStatus] = useState('loading please wait...')

  useEffect(() => {
    fetch('/api/health')
        .then((res) => res.json())
        .then((data) => setStatus('ok'))
        .catch(() => setStatus('backend unreachable'))
  }, [])
  return(
      <div>
        <h1>Welcome to OJTTrack</h1>
        <p>Backend status: {status}</p>
      </div>
  )
}
export default App
