import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [Liste, setListe] = useState([]);

  useEffect(()=>{
    console.log("Chargement du composant...");

    axios.get("http://127.0.0.1:8000/api/clients").then(
      (data)=>{
        console.log("les données sont servies...")
        console.log(data)
      }
    )

  },[])
  
  return (
    <div>
      App test 
      <hr /> 
      {
        Liste.map((client)=>(
          <div> 
            {client.nom}
          </div>
        ))
      }
    </div> 
  );
}

export default App;
