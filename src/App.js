
import './App.css';
// import {Navbar} from './components/Navbar';
import { UpdateInfo } from './components/UpdateInfo';
// import {Signuppage} from './components/Signup';
import { DashBoard } from './components/DashBoard';
function App() {
  return (
    <div className="App">
      <>
      {/* <Navbar/> */}
      {/* <Signuppage/> */}
      <DashBoard/>
      <UpdateInfo/>
      </>
    
    </div>
  );
}

export default App;
