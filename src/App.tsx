import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/DashboardPage';


function App() {

  return (
    <BrowserRouter>
    
      <nav>
        <Link to="/loginPage">Login</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
      </nav>

      {/* Routes */}
      <Routes>        
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* <LoginPage /> */}
    
    </BrowserRouter>
  )
}

export default App
