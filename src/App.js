import './App.css';
import {Navbar} from './components/Navbar';
import {Login} from '../components/Login.jsx';
import {Signuppage} from './components/Signup';
function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <Login/>
      <Signuppage/>
      </>
    
    </div>
  );
}

export default App;
