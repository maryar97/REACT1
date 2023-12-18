import { useState } from "react";

function Form(props) {

  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")

  const handleChangeNom = (event) => {
    setNom(event.target.value)
  }
  const handleChangePrenom = (event) => {
    setPrenom(event.target.value)
  }

  const handleClick = () => {
    fetch("https://127.0.0.1:8000/api/clients", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({nom, prenom})
    })
    .then((reponse)=>{
      console.log (reponse) 
      props.onChange()
    })
}

  return (
    <div>
      <h2>Formulaire</h2>
      <input type="text" value={nom} onChange={handleChangeNom}/>
      <input type="text" value={prenom} onChange={handleChangePrenom}/>
      <button onClick={handleClick}>Ajouter</button>

    </div>
  );
}

export default Form;
