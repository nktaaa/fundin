import { Main } from './pages/Main';
import {Company} from './pages/Company'
import { BrowserRouter as Router } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';

import './App.css';
import {Navbar} from './components/Navbar';
import { UpdateInfo } from './components/UpdateInfo';

import { DashBoard } from './components/DashBoard';
function App() {
  return (
    <div className="App">

      <Router>
      <Navbar/>
      
      <DashBoard/>
      <UpdateInfo/>
        <LoginPage/>
        <SignupPage/>
        <Main/>
        <Company/>
      </Router>
    </div>
  );
}

export default App;