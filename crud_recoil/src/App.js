import Form from "./Form";
import List from "./List";
import listState from "./recoil";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";

function App() {

  const setListe = useSetRecoilState(listState);


  useEffect( () => {
    fetch("https://127.0.0.1:8000/api/clients")
    .then((reponse)=>{ return reponse.json() })
    .then((data) => {
      console.log(data)
      setListe(data)
    })
  }, [])


  return (
    <div className="App">
      <Form />
      <List />
    </div>
  );
}

export default App;