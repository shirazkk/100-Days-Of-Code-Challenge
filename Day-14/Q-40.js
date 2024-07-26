"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artish_name, album_tittle, album_tracks) {
    let music_album = {
        name: artish_name,
        tittle: album_tittle
    };
    if (album_tracks !== undefined) {
        music_album.track = album_tracks;
    }
    return music_album;
}
console.log(make_album("Atif Aslam", "Tere Liye", 11));
console.log(make_album("Asim Azhar", "Jo tu na mila"));
console.log(make_album("Arijit Singh", "Ae Dil Hai Mushkil", 8));
