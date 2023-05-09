import React from "react";
import { Route, Routes } from "react-router-dom";
import Albums from "./Albums";
import AlbumLayaout from "./AlbumLayout";

function AlbumsRoutes(){
    return (
    <Routes>
        <Route index element={<Albums/>}/>
        <Route path=":albumId" element={<AlbumLayaout/>}/>
    </Routes>);
}

export default AlbumsRoutes;