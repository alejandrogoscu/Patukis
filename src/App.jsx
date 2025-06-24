import './App.css';
import { RegisterForm } from './components/User/RegisterForm/RegisterForm';
import { UserProvider } from './context/UserContext/UserState';

function App() {
  return (
    <>
      <UserProvider>
        <RegisterForm />
      </UserProvider>
    </>
  );
}

export default App;
