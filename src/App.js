import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';


function App() {

  
  const count= useSelector(state=>state.count)
  const dispatch = useDispatch()

  const increase=()=>{
    dispatch({type:"INCREMENT", payload:{num:5}})
  }

  const decrease =()=>{
    dispatch({type:"DECREMENT"})
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
      <Box/>
      <button onClick={decrease}>감소</button>
    </div>
  );
}

export default App;
