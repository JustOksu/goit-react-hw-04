import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <div className={styles.gallery}>
      {images.map((image) => (
        <div key={image.id} className={styles.imageItem}>
          <img
            src={image.webformatURL}
            alt={image.tags}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
