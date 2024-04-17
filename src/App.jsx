import './App.css'
import MainLayout from './layouts/MainLayout'
import SignUp from './pages/auth/SignUp'
import SignIn from './pages/auth/SignIn'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResetPassword from './pages/auth/ResetPassword';
import CheckEmail from './pages/auth/CheckEmail';
import Verification from './pages/auth/Verification';
import CreatePassword from './pages/auth/CreatePassword';
import Home from './pages/home/Home';

function App() {

  document.title = 'Echo Craft Hub';
  
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>

            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="check-email" element={<CheckEmail />} />
            <Route path="verification" element={<Verification />} />
            <Route path="create-password" element={<CreatePassword />} />

            <Route path="/" element={<Home />} />

          </Routes>
        </MainLayout>
      </Router>
    
    </>
  )
}

export default App
