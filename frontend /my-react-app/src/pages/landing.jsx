import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import styles from './home.module.css'

function LandingPage() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [])

  const handleAction = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    } else {
      navigate("/auth");
    }
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <h3>V Call</h3>
        </div>
        <div className={styles.navActions}>
          <Button
            className={styles.navButton}
            onClick={handleAction}
          >
            Register
          </Button>
          <Button
            className={styles.joinButton}
            onClick={handleAction}
            style={{ height: '40px' }}
          >
            Login
          </Button>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.heroContent}>
            <h2>Connect With Your Loved Ones.</h2>
            <p>Experience the future of secure, high-quality video meetings. Fast, reliable, and available for everyone, anywhere.</p>

            <div className={styles.inputGroup}>
              <Button
                className={styles.joinButton}
                onClick={handleAction}
                style={{ padding: '0.8rem 3rem' }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <img src="/pp.png" alt="Video Call Illustration" />
        </div>
      </div>
    </div>
  )
}

export default LandingPage