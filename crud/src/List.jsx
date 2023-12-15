function List(props) {
  
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
