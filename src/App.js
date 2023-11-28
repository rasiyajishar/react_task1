import logo from './logo.svg';
import './App.css';
import Child from "./child"
import Onchange from './onchange';
import Counterapp from './counterapp';
import MyPromisecomponent from './promise';
import Asyncpromise from './asyncpromise';
import Fetchapi from './fetchapi';
function App() {
  const name="helloo";
  return (
    <div className="App">
     <Child value ={name}/>
     <Onchange />
     <Counterapp />
    <MyPromisecomponent />
    <Asyncpromise />
    <Fetchapi />
    </div>
  );
}

export default App;
