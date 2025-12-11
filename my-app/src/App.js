import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [data,setData] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const getPropertyData = async()=>{
try {
  const url = "https://headless-practice.rf.gd/proxy.php";
 const response = await axios.get(url)
 console.log("response",response);
 if(response?.status === 200){
    setIsLoading(false)
    setData(response.data[0])
 }
 
} catch (error) {
  throw new Error("Response not get!");
  
}
  }
  useEffect(() => {
    getPropertyData()
  }, []);
  console.log("data",data);
  
  return (
    <div className="App">
      <header className="App-header">                        
        {
          isLoading ? <img src={logo} className="App-logo" alt="logo" /> : <div>
          <h2>
          {data?.title?.rendered}
        </h2>
        <ul style={{listStyle:'none'}}>
          <li style={{marginBottom:"7px"}}>Bathroom : {data?.acf?.bathroom}</li>
          <li style={{marginBottom:"7px"}}>Bedroom :  {data?.acf?.bedroom}</li>
          <li style={{marginBottom:"7px"}}>Price :    {data?.acf?.price}</li>
        </ul>
        </div>
        }                
      </header>
    </div>
  );
}

export default App;
