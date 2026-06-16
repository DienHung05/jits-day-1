import { useState} from 'react';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handlePing() {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:1337/ping', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const body = await res.json();
      setResult(body);
    } catch (e) {
      setResult({ err: -1, message: 'Request failed: ' + e.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 40 }}>
      <h1>Ping / Pong</h1>
      <button onClick={handlePing} disabled={loading}>
        {loading ? 'Pinging...' : 'Ping'}
      </button>

        {result && (
          <div style={{ marginTop: 15 }}>
            <p>err: <strong>{result.err}</strong></p>
            <p>message: <strong>{result.message}</strong></p>
          </div>
          )
        }
    </div>
  );
}

export default App;