import "./App.css";
import Color from "./components/Color";
import Counter from "./components/Counter";
import Form from "./components/Form";
import StateEx from "./components/StateEx";
import User from "./components/User";

const title="Person Title";
const Person={
  name:"Baykal",
  city:"Erzincan",
  age:29
}
function App() {
  return (
    <div >
    <User data={Person} title={title}/>
    <Counter/>
    <StateEx/>
    <Color/>
    <Form/>
    </div>
  );
}

export default App;
