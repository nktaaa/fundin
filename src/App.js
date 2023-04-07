import './App.css';
import {Signuppage} from './components/Signup';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
function App() {
  return (
    <div className="App">
      <Router>
        <LoginPage/>
        <Signuppage/>
      </Router>
    </div>
  );
}

export default App;
