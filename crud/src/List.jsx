import { useEffect, useState } from "react";
function List() {

  const[Liste, setListe] = useState([])


  useEffect( () => {
    fetch("https://127.0.0.1:8000/api/clients")
    .then((reponse)=>{return reponse.json() })
    .then((data) => {
      console.log(data)
      setListe(data)
    })
  }, [])

  return (
    <div>
      <h2>Liste</h2>
      <div>
        {
          Liste.map((client) => (
            <div> 
              {client.nom}  {client.prenom}
            </div>

          ))
        }
      </div>
    </div>
  );
}

export default List;
