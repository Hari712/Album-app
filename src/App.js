import { useState,useEffect } from 'react';
import Loader from './components/Loader';
import AlbumsList from './components/AlbumsList';
import AlbumImages from './components/AlbumImages';
import  { FetchList , FetchUserData , FetchImages } from './Services/ApiFile'

const App = () => {
  const [albums , setalbum] = useState([]);
  const [selectedalbum , setselectedalbum] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [openPhotos, setOpenPhotos] = useState(false);
  const [loader, setLoader] = useState(true);


  useEffect(() => {
    fetchData();
  },[]); 

  const fetchData = async () => {
    const data = await FetchList();
    setLoader(false);
    setalbum(data);
  }

  const handleClick = async (e) =>{
    setLoader(true);
    const data = await FetchUserData(e);
    const data1 = await FetchImages(e);
    setOpenPhotos(true);
    setLoader(false);
    setselectedalbum(data);
    setPhotos(data1);
  }


  return (
    
    <div>
      
      {loader? <Loader />: null}
      {!openPhotos && !loader ? <AlbumsList albums={albums} header="Album App" onClick={handleClick} /> : 
      !loader? <AlbumImages photos={photos} albumdetail={selectedalbum}/> : null}
    
     </div>
  );
}


export default App;
