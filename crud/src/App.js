import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";

function App() {

  const [liste, setListe] = useState([])


  useEffect( () => {
    fetch("https://127.0.0.1:8000/api/clients")
    .then(data(reponse)=>{return reponse.json() })
    .then((data) => {
      console.log(data)
      setListe(data)
    })
  }, [])

  const HandleChange = () => {
    fetch("https://127.0.0.1:8000/api/clients")
    .then((reponse)=>{return reponse.json() })
    .then((data) => {
      console.log(data)
      setListe(data)
    })
  }

  return (
    <div className="App">
      <Form onChange={HandleChange}/>
      <List liste={liste}/>
    </div>
  );
}

export default App;
