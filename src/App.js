import logo from './logo.svg';
import './App.css';
import Child from "./child"
function App() {
  const name="helloo";
  return (
    <div className="App">
     <Child value ={name}/>
    </div>
  );
}

export default App;
