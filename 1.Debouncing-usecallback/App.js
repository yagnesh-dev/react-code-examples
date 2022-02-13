import './App.css';
import {useCallback, useState} from 'react'
function App() {
const [search,setSearch] = useState([])

const handleSearch = (event) =>{
  const {value} = event.target;
  fetch(`https://jsonplaceholder.typicode.com/users?id=${value}`)
  .then(response=>response.json())
  .then(json => setSearch(json))
}

const debounce = (func) =>{
  let timer;
  return function(...args){
    if(timer) clearTimeout(timer);
    timer = setTimeout(()=>{
      timer = null;
      func.apply(this,args);
    },500)
  }
}

const optimizedCalls = useCallback(debounce(handleSearch),[])
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" name="search" placeholder="Enter text here.." className="search" onChange={optimizedCalls}></input>
      </header>
      {search?.length > 0 &&
      <div className="autocomplete">
        {search?.map((value,i)=>{
          return <div key={i} className="autocomplete">
            <span>{value.name}</span>
          </div>
        })}
      </div>}
    </div>
  );
}

export default App;
