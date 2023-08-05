import "./index.css";
import HeaderToDo from "./components/Header";
import Content from "./components/Content";
import FooterToDo from "./components/FooterToDo";

function App() {
  
  return (
  <>
    <section className="todoapp">
     <HeaderToDo/>
     <Content/>
     <FooterToDo/>
    </section>
    </>
  );
}

export default App;
