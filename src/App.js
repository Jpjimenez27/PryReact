import './App.css';
import { Routes, Route } from 'react-router';
import Nav from './ui/Navigation.js';
import Main from './components/MainMenu';
import RecordTraining from './components/Rtraining';
import UserRegister from './components/Register';
import Trainings from './components/Trainings';
import Login from './components/Login';
import { AuthProvider } from './firebase/AuthContext';

function App() {
  return (
    <div>
      <AuthProvider>
        <Nav/>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register-user' element={<UserRegister />} />
          <Route path='/trainings' element={<Trainings />} />
          <Route path='/register-training' element={<RecordTraining />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
