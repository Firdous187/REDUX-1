
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

function App() {

  let inputRef = useRef();
  let dispatch = useDispatch();
  let storeObj = useSelector((store) =>{
    return store;
  });
  return (
    <div className="App">
      <input ref={inputRef}></input>
      <button onClick={()=>{
        dispatch({type:"addActor", data:inputRef.current.value});

      }}>actors</button>

      <button onClick={()=>{
        dispatch({type:"addCricketers",data:inputRef.current.value});
      }}>cricketers</button>

      <button onClick={()=>{
        dispatch({type:"addPoliticians", data:inputRef.current.value});
      }}
      
     
      >politicians</button>
       <hr></hr>
       <h1>Actors:{storeObj.actors.join()}</h1>
       <h1>Cricketers:{storeObj.cricketers.join()}</h1>
       <h1>politicians:{storeObj.politicians.join()}</h1>
       

      
    </div>
  );
}

export default App;
