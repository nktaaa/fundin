// import { Main } from "./pages/Main";
// import { Company } from "./pages/Company";
// import { BrowserRouter as Router } from 'react-router-dom';
// import { LoginPage } from "./pages/LoginPage";
// import { SignupPage } from "./pages/SignupPage";

// import { Navbar } from "./components/Navbar";
import { UpdateInfo } from "./components/UpdateInfo";

// import { DashBoard } from "./components/DashBoard";

import "./App.css";
import { ChartPages } from "./components/ChartPages";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <DashBoard /> */}
      <UpdateInfo />
      {/* <LoginPage /> */}
      {/* <SignupPage />
         <Main /> */}
       {/* <Company /> */}
      <ChartPages/>
      
    </div>
  );
}

export default App;
