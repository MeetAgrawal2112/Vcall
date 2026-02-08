import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Authentication from './pages/authentication'
import LandingPage from './pages/landing'
import { AuthProvider } from './contexts/AuthContext'
import VideoMeetingComponent from './pages/VideoMeeting'
function App() {

  return (
    <>
    <Router>
    <AuthProvider>
    <Routes>

    <Route path="/" element={<LandingPage />} />
    <Route path="/auth" element={<Authentication />} />
    <Route path='/:url' element={<VideoMeetingComponent />} />
    </Routes>
    </AuthProvider>

    </Router>
    </>
  )
}

export default App
