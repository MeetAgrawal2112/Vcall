import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
function LandingPage() {
  return (
    <div className='LandingPageContainer'>
      <nav> 
        <div className='navLeft'>
          <h2>V Call</h2>
        </div>
        <div className='navRight'>
          <p>Join As Guest</p>
          <p>Register</p>
          <div role='button'>
            Sign In
          </div>
        </div>
      </nav>

      <div className="Hero">
        <div className='heroText'>
          <h1><span style={{ color: "#ff9999" }}>Connect</span> With The Loved Ones</h1>
          <p>Connect Far in Seconds</p>

          <div role='button' className='getStarted'>
            <Link to="/auth">Get Started</Link>
          </div>

        </div>

        <div className='mobileSecondary'>
          <img src="/pp.png" alt="Img" />
        </div>
      </div>
    </div>
  )
}

export default LandingPage