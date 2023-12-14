// import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

function App() {

  // const [Liste, setListe] = useState([]);

useEffect(()=>{
  //   console.log("Chargement du composant...");

    fetch("https://127.0.0.1:8000/api/clients")
    .then((r)=>r.json())
    .then((data) => {
      console.log(data)
    })

    // axios.get("http://127.0.0.1:8000/api/clients").then(
    //   (data) => {
    //     console.log("les données sont servies...")
    //     console.log(data)
    //   }
    // )

},[])
  
  return (
    <div>
      App testfffde
      <hr /> 
      {/* {
        Liste.map((client)=>(
          <div> 
            {client.nom}
          </div>
        ))
      } */}
    </div> 
  );
}

export default App;
