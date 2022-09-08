import React,{useState} from 'react'

export const App = () => {
  const [name,setName] = useState(`Vijay Kumar Reddy Kotagiri`);
  return (
    <div>
      <center>
        <h3> My First react App</h3>
        <p> Name : {name} </p>
      </center>

    </div>
  )
}

export default App;