import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext/UserState';
import LoginForm from './components/User/LoginForm/LoginForm';
import LogoutButton from './components/User/LogoutButton/LogoutButton';
import UserContext from './context/UserContext/UserContext';
import PrivateRoute from './components/User/Guards/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
            <>
              <h1>Bienvenido al dashboard</h1>
              <LogoutButton />
            </>
            </PrivateRoute>
          } />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;


