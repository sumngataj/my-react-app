import React from "react";

const styles = {
  galleryContainer: {
    display: "flex",
    flexWrap: "wrap",

    justifyContent: "space-around",
  },
  galleryItem: {
    margin: "20px",
    textAlign: "center",
  },
  image: {
    maxWidth: "100%",
    height: "250px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
};

const Gallery = () => {
  const images = [
    { url: "./images/bgsite.jpg", caption: "Engine Room" },
    { url: "./images/bgsite.jpg", caption: "Engine Simulator" },
    { url: "./images/pool.jpg", caption: "Swimming Pool" },
    { url: "./images/bgsite.jpg", caption: "School Gym" },
    { url: "./images/bgsite.jpg", caption: "Mini Function Hall" },
    { url: "./images/bgsite.jpg", caption: "Library" },
  ];

  return (
    <div style={styles.galleryContainer}>
      {images.map((image, index) => (
        <div key={index} style={styles.galleryItem}>
          <img
            src={image.url}
            alt={`Image ${index + 1}`}
            style={styles.image}
          />
          <p style={{ marginTop: "5px", fontSize: "17px" }}>{image.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
