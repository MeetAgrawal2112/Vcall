import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Authentication from './pages/authentication'
import LandingPage from './pages/landing'
import { AuthProvider } from './contexts/AuthContext'
import VideoMeetingComponent from './pages/VideoMeeting'
import Home from './pages/home'
import PreviousMeet from './pages/previousMeet'
function App() {

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>

            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path='/home' element={<Home />} />
            <Route path='/history' element={<PreviousMeet />} />
            <Route path='/:url' element={<VideoMeetingComponent />} />
          </Routes>
        </AuthProvider>

      </Router>
    </>
  )
}

export default App
