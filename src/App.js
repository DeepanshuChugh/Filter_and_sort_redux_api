import "./App.css";
import { Navbar } from "./components/Navbar";
import Mainroutes from "./pages/Mainroutes";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Mainroutes></Mainroutes>
    </div>
  );
}

export default App;
