import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './pages/Responsive footer pure css/Footer';
import Navigation from './pages/Responsive navbar pure css/Navigation';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import { useEffect, useState } from 'react';
import { getStoredCart } from './pages/fakedb/fakedb';
import PrivateRoute from './pages/Login/PrivateRoute';
import Home from './Home/Home';
import CRM from './CRM/CRM';
function App() {
 

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState('')

  useEffect(() => {
    setIsLoading(true)
    setUser(getStoredCart().user)
    setIsLoading(false)
  }, [user])
  return (isLoading? <h1>Loading...</h1>:
    <div className="App">
      <Router>
        <Navigation user={user} setUser={setUser} />
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>


          <Route path="/addProduct" element={
            <PrivateRoute user={user} isLoading={isLoading}>
              <CRM />
            </PrivateRoute>
          } >
          </Route>

          <Route path="/login" element={<Login setUser={setUser} />} >
          </Route>
          <Route path="/register" element={<Register setUser={setUser} />} >
          </Route>

        </Routes>
        {/* this is footer fixed field show */}
        <div style={{ width: '100%', height: '120px' }}></div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
