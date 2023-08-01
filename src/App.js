 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from './components/Login'
import UserExample from "./components/UserExample";
import UserDetailExample from "./components/UserDetailExample";
import SignupForm from "./components/SignUpForm";
 
function App() {
  
  return (
 
    // <BrowserRouter>
    //   <Routes>
    //     <Route index element={<Login/>}></Route>
    //     <Route path="users" element={<UserExample/>}></Route>
    //     <Route path="users/:id" element={<UserDetailExample/>}></Route>
    //   </Routes>
    // </BrowserRouter>
    <div>
      <SignupForm/>
    </div>
  
 
   
  );
}

export default App;
