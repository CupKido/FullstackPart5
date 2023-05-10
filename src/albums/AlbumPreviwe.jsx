import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AlbumPreviwe({id, title, display}){
    const nPreviewPhotos = 4
    const [coverPhoto, setCoverPhoto] = useState([])
    useEffect(() => {
        if (display){
            async function getCoverPhoto(){ 
                fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + id)
                    .then(res => res.json())
                    .then(p => setCoverPhoto(p[0]))
            }
    
            getCoverPhoto();
        }
    }, [display])

    return (
        <Link to={'./'+id}>
            <h1>{title}</h1>
            <img src={coverPhoto.thumbnailUrl} alt={title}/>
        </Link>
    )
}

export default AlbumPreviwe;