import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext/UserState';
import { RegisterForm } from './components/User/RegisterForm/RegisterForm';
import { RegisterConfirmation } from './components/User/RegisterConfirmation/RegisterConfirmation';
import LoginForm from './components/User/LoginForm/LoginForm';
import LogoutButton from './components/User/LogoutButton/LogoutButton';
import { Profile } from './components/User/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/confirmation" element={<RegisterConfirmation />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/logout" element={<LogoutButton />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
