import { useState } from "react";

function App() {

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  const handlechaneNom = (event) => {
    setNom(event.target.value);

  }


  const handlechanePrenom = (event) => {
    setPrenom(event.target.value);

    
  }

  return (
    <div>
      <input type="text" value={nom} onChange={handlechaneNom}/>
      <input type="text" value={prenom} onChange={handlechanePrenom}/>
      <div>
        Bonjour {prenom} {nom}
      </div>

    </div>
  );
}

export default App;
