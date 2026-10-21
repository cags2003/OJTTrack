import { useEffect, useState } from 'react'

function App() {
    const [applications, setApplications] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('/api/applications')
            .then((res) => {
                if (!res.ok) throw new Error('Request failed: ' + res.status)
                return res.json()
            })
            .then((data) => setApplications(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Could not load applications: {error}</p>

    return (
        <div>
            <h1> My Applications</h1>
            {applications.length === 0 ? (
                <p>No applications yet.</p>
            ) : (
                <ul>
                    {applications.map((app) => (
                        <li key={app.id}>
                            {app.companyName} — {app.status}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default App