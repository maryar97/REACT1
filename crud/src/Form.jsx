import { useState } from "react";

function Form() {

  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")

  const handleChangeNom = (event) => {
    setNom(event.target.value)
  }
  const handleChangePrenom = (event) => {
    setPrenom(event.target.value)
  }

  const handleClick = () => {

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
