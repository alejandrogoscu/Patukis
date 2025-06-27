import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { RegisterForm } from './components/User/RegisterForm/RegisterForm';
import { UserProvider } from './context/UserContext/UserState';
import { RegisterConfirmation } from './components/User/RegisterConfirmation/RegisterConfirmation';
import { Profile } from './components/User/Profile/Profile';
import { Home } from './components/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Home />
          <Routes>
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/confirmation" element={<RegisterConfirmation />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
