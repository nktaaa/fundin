import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
function App() {
  return (
    <div className="App">
      <Router>
        <LoginPage/>
        <SignupPage/>
      </Router>
    </div>
  );
}

export default App;