import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AlbumLayaout(){
    const {albumId} = useParams();
    //console.log(albumId);

    const [album, setAlbum] = useState({});
    const [photos, setPhotos] = useState([{title: 'test'}]);
    
    useEffect(() => {
        async function getData(){
            fetch('https://jsonplaceholder.typicode.com/albums/'+albumId)
                .then(respond=>respond.json())
                .then(data => {setAlbum(data); console.log(album)});
        }
                
        
        async function getPhotos(){
            //TODO: not all photos at once
            fetch('https://jsonplaceholder.typicode.com/photos?albumId='+albumId)
            .then(respond=>respond.json())
            .then(data => setPhotos((ps) => data))
            .then(console.log(photos));
        }
        
        getPhotos();
        getData();

    }, [])


    return (
        <div>
            <h1>{album.title}</h1>
            <br/>
            <div>
                {photos.slice(0, 10).map((photo, index) => {
                    <h1>Test</h1>
                })}
            </div>
        </div>
    )
}

export default AlbumLayaout;