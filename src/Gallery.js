import { useState, useEffect } from 'react';

import { createClient } from 'pexels';
const client = createClient('563492ad6f917000010000012a3d4ec509bc4ffb9c82eec3eae30746');

// const API_KEY = "563492ad6f91700001000001c8655c6860ff444ca8f5073c762aa187";
// const API_URL = "https://api.pexels.com/v1/search?query=nature&orientation=landscape&per_page=30";

function Gallery() {
    // client.photos.curated({ per_page: 1 }).then(photos => {
    //     for (let i = 0; i < (photos.photos.length); i++) {
    //         let img = document.createElement('img');
    //         (i % 2 === 0) ? img.src = photos.photos[i].src.landscape : img.src = photos.photos[i].src.portrait;
    //         ;
    //         img.classList = 'gallery-image';
    //         let gallery = document.getElementsByClassName("gallery-main");
    //         gallery[0].appendChild(img);
    //     }
    // });

    const query = 'Nature';


    const [photos, setData] = useState([]);

    useEffect(() => {

        client.photos.search({ query, per_page: 30 })
            .then((photos) => {
                setData(photos.photos);
            })
            .catch((error) => {
                console.log(error);
            })

        // fetch(API_URL, {
        //     headers: {
        //         "Authorization": API_KEY,
        //     }
        // })
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((responce) => {
        //         const photos = responce.photos;
        //         setData(photos);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
    }, []);



    return (
        <div className="gallery-main">
            {photos.map((photo) => (
                <div key={photo.id} className="gallery-photo" >
                    <img src={photo.src.medium} className="note-img" width="100%" height="100%" alt={`Provided by Pexels, photographer - ${photo.photographer}`} />
                </div>
            ))}
        </div>
    );
}

export default Gallery;