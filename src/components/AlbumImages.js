import { useState } from 'react';
const AlbumImages = (props) =>{
    const {photos, albumdetail: {title}} = props;
    const [openModalbox, setOpenModal] = useState(false);
    const [selectedimg, setselectedimg] = useState([]);
    const openModal = (e) =>{
      setOpenModal(true);
      var data = photos.filter((photo) => (photo.id == e.target.id))
      setselectedimg(data)
    }
    const getRandomSize = (min, max) => {
      return Math.round(Math.random() * (max - min) + min);
    }
    return(
      <div  className="Container" >
      
         {!openModalbox ? <div> 
           <h1>Our Gallery</h1>
            <p>Album Name:<span> {title} </span></p>
            <div className="photos-grid">
              {photos.map(({id,thumbnailUrl,title}) => (<img src={thumbnailUrl} id={id}  onClick={openModal} alt={title} height={getRandomSize(200, 400)} /> ))}
            </div> </div> : <div> 
            <h1>Selected Image</h1>
            <p>Album Name:<span> {title} </span></p>
            { selectedimg.map(({url,title}) =>(<div><img src={url} className="single-img" alt={title}/><h3>image Name : {title}</h3> </div>))} </div>
          }
         
      </div>
    )
  }

  export default  AlbumImages;