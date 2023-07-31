import { useState } from "react";
import "./App.css";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
 
// const title="Person Title";
// const Person={
//   name:"Baykal",
//   city:"Erzincan",
//   age:29
// }
function App() {
  const [activeuserId,setActiveUserId]=useState(null);
  return (
    <div className="App">
      <div>
        <UserList setActiveUserId={setActiveUserId}/>
      </div>
      <div><UserDetail activeUserId={activeuserId}/></div>
    </div>
  );
}

export default App;
