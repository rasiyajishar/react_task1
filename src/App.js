import logo from './logo.svg';
import './App.css';
import Child from "./child"
import Onchange from './onchange';
function App() {
  const name="helloo";
  return (
    <div className="App">
     <Child value ={name}/>
     <Onchange />
    </div>
  );
}

export default App;
