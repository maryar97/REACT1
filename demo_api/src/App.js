import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [Liste, setListe] = useState([]);

  useEffect(()=>{
    console.log("Chargement du composant...");

    // fetch("https://127.0.0.1:8000/api/clients")
    // .then((r)=>r.json())
    // .then((data) => {
    //   console.log("les données sont servies")
    //   console.log(data)
    //}
  //)

    axios.get("https://127.0.0.1:8000/api/clients",
      {
        headers: {
          Accept: "application/json"
        }
      }
    ).then(
      (reponse) => {
        console.log("les données sont servies...")
        console.log(reponse.data)
        setListe(reponse.data)
      }
    )

  },[])
  
  return (
    <div>
      App test
      <hr /> 
      {
        Liste.map((client, index)=>(
          <div key={index}> 
            {client.nom} {client.prenom} 
          </div>
        ))
      }
    </div> 
  );
}

export default App;
