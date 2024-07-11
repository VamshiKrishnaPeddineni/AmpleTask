import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import LeaveApplication from './pages/leaveApplication';
import LeaveAlert from './pages/leaveAlert';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/leaveapply' element={<LeaveApplication/>}/>
        <Route path='/leavealert' element={<LeaveAlert/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
