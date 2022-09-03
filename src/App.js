
import './App.css';
import FormValidation from './Components/FormValidation/FormValidation';
import UserInfoStore from './Components/UserInfoStore/UserInfoStore';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
      
      <Routes>
        <Route path='/' element={<FormValidation></FormValidation>}></Route>
        <Route path = '/userInfo' element={<UserInfoStore></UserInfoStore>}></Route>
      </Routes>
    </div>
  );
}

export default App;
