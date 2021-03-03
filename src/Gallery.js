import { useState, useEffect } from "react";

import { createClient } from "pexels";

function Gallery({
  postDataChangeHandler,
  query,
  isGalleryFetching,
  setGalleryFetching,
}) {
  const selectImage = (e) => {
    e.target.className = "selected-img";
    postDataChangeHandler(e);
  };

  const [photos, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const client = createClient(
      "563492ad6f917000010000012a3d4ec509bc4ffb9c82eec3eae30746"
    );
    setGalleryFetching(true);
    client.photos
      .search({ query, per_page: 30 })
      .then((response) => {
        if (response.error) {
          setError(response.error);
          setGalleryFetching(false);
        }
        setData(response.photos);
        setGalleryFetching(false);
      })
      .catch((error) => {
        setGalleryFetching(false);
        console.log(error);
        setError("error");
      });
  }, []);

  return (
    <div className="gallery-main">
      {isGalleryFetching && "Загрузка..."}
      {error && <span>{error}</span>}
      {photos &&
        photos.length > 1 &&
        photos.map((photo) => (
          <div key={photo.id} className="gallery-photo">
            <img
              src={photo.src.medium}
              onClick={selectImage}
              width="100%"
              height="100%"
              alt={`Provided by Pexels, photographer - ${photo.photographer}`}
            />
          </div>
        ))}
    </div>
  );
}

export default Gallery;
