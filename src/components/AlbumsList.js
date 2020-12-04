 const AlbumsList = (props) =>{
    const {albums, header, onClick} = props;
    return(
      <div  className="Container" >
        <h1>{header}</h1>
        <ul>
            {albums.map(({id, title}) => (                                                                                                                             
              <li key={id} onClick={onClick} id={id}>{title}</li>
            ))}
        </ul> 
  
        </div>
    );
  }

  
export default AlbumsList;