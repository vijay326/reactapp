import React,{useState} from 'react'
import Test from './Test';

export const App = () => {
  const [data,setData] = useState({
    name : `Vijay Kumar Reddy Kotagiri`,
    age : 31
  });
  return (
    <div>
      <center>
        <Test name = {data.name} age={data.age}/>
      </center>

    </div>
  )
}

export default App;