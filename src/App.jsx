import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { RegisterForm } from './components/User/RegisterForm/RegisterForm';
import { UserProvider } from './context/UserContext/UserState';
import { RegisterConfirmation } from './components/User/RegisterConfirmation/RegisterConfirmation';
import { Profile } from './components/User/Profile/Profile';
import Responsive from "./components/Responsive/Responsive";

function App() {
  return (
    <>
      <BrowserRouter>
        <Responsive>
          <UserProvider>
            <Routes>
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/confirmation" element={<RegisterConfirmation />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </UserProvider>
        </Responsive>
      </BrowserRouter>
    </>
  );
}

export default App;
