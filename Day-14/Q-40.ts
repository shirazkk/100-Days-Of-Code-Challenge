function make_album(artish_name:string,album_tittle:string,album_tracks?:number){
    let music_album:any={
       name:artish_name,
       tittle:album_tittle
    } 
    if(album_tracks!==undefined){
        music_album.track=album_tracks
    }
    
    return music_album
}
console.log(make_album("Atif Aslam","Tere Liye",11));
console.log(make_album("Asim Azhar","Jo tu na mila"));
console.log(make_album("Arijit Singh", "Ae Dil Hai Mushkil", 8));



