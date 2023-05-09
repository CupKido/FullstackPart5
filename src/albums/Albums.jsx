import { useState, useEffect } from 'react'
import axios from 'axios';
import AlbumLayaout from './AlbumLayout';
import AlbumPreviwe from './AlbumPreviwe';
function Albums() {

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function getAlbums(){
      //TODO: userId =?
      const userId=3;
      fetch('https://jsonplaceholder.typicode.com/albums?userId=' + userId)
        .then(respond => respond.json())
        .then(newAlboms => setAlbums(newAlboms));
    }

    getAlbums();
  }, [])

  return (
    <div>   
      {albums.map((album, index)=> <AlbumPreviwe key={index} {...album}/>)}
    </div>
  )
}

  export default Albums