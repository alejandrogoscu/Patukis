import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext/UserState';
import LoginForm from './components/User/LoginForm/LoginForm';
import LogoutButton from './components/User/LogoutButton/LogoutButton';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={
            <>
              <h1>Bienvenido al dashboard</h1>
              <LogoutButton />
            </>
          } />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;


