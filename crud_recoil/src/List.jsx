import listState from "./recoil";
import { useRecoilValue } from "recoil";
function List(props) {

  const liste = useRecoilValue(listState);

  
  return (
    <div>
      <h2>Liste</h2>
      <div>
        {
          props.liste.map((client) => (
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