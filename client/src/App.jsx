import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // 1. Form States
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  // 2. Feedback States
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // 3. API Handler
  const handleLogin = async (e) => {
    e.preventDefault()
    setMessage('')
    setError('')
    setIsLoading(true)

    try {
      // Upgraded to target your live public Dev Tunnel backend link instead of localhost
      const response = await fetch('https://f5chktnn-5000.inc1.devtunnels.ms/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        // Success! Greet the user and store their authentication token
        setMessage(`Welcome back, ${data.user.name}!`)
        localStorage.setItem('token', data.token)
        
        // Optional: Clear form fields on success
        setEmail('')
        setPassword('')
      } else {
        // Server responded with an error (e.g., wrong password)
        setError(data.message || 'Invalid email or password.')
      }
    } catch (err) {
      // Tunnel is offline or network failed
      setError('Cannot connect to the live server. Make sure your VS Code ports tunnel stays active!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        
        <div>
          <h1>Nexus Login</h1>
          <p>Sign in to connect your frontend with your local database server.</p>
        </div>

        {/* Interactive Login Form */}
        <form onSubmit={handleLogin} style={{
          width: '100%',
          maxWidth: '320px',
          margin: '20px auto',
          textAlign: 'left'
        }}>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', opacity: 0.9 }}>
              Email Address
            </label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '6px',
                border: '1px solid #444',
                backgroundColor: '#222',
                color: '#fff',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', opacity: 0.9 }}>
              Password
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '6px',
                border: '1px solid #444',
                backgroundColor: '#222',
                color: '#fff',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <button
            type="submit"
            className="counter"
            disabled={isLoading}
            style={{ 
              width: '100%', 
              cursor: isLoading ? 'not-allowed' : 'pointer',
              opacity: isLoading ? 0.7 : 1
            }}
          >
            {isLoading ? 'Verifying...' : 'Sign In'}
          </button>
        </form>

        {/* Dynamic Alert Messages */}
        {message && (
          <p style={{ color: '#4caf50', fontWeight: '500', marginTop: '10px' }}>
            {message}
          </p>
        )}
        {error && (
          <p style={{ color: '#f44336', fontWeight: '500', marginTop: '10px' }}>
            {error}
          </p>
        )}
      </section>

      <div className="ticks"></div>

      {/* Kept your original documentation links intact for your presentation footer */}
      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank" rel="noreferrer">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank" rel="noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank" rel="noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank" rel="noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App