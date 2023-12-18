import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [liste, setListe] = useState([]);
  const [element, setElement] = useState(""); // Define 'element' state
  const [titre, setTitre] = useState("");
  const handleChangeTitre= (event)=>{
    setTitre(event.target.value);
  }
  const loadData = () => {

    axios.get(
      `http://api.themoviedb.org/3/search/movie?api_key=f33cd318f5135dba306176c13104506a&query=${titre}`,
      {
        headers: {
          Accept: "application/json"
        }
      }
    ).then(
      (reponse) => {
        console.log("les données sont servies...");
        console.log(reponse.data);
        setListe(reponse.data.results); // Assuming 'results' contains the array of movies
      }
    );
  };

  useEffect(() => {
    console.log("Chargement du composant...");
    loadData();
  }, []);

  const handleChange = (event) => {
    setElement(event.target.value); // Set 'element' state on input change
  };

  const handleClick = () => {
    axios
      .get("http://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "f33cd318f5135dba306176c13104506a",
          query: element // Use the 'element' state here
        }
      })
      .then((data) => {
        console.log(data);
        loadData();
      });
  };

  return (
    <div>
      {/* <input type="text" value={element} onChange={handleChange} /> */}
      <button onClick={handleClick}>Ajouter</button>
      <input value={titre} onChange={handleChangeTitre} />
      <div>
        {liste.map((movie) => (
          <div key={movie.id}>
            {movie.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
