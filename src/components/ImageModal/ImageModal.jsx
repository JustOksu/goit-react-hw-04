import styles from "./ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={styles.image}
        />
        <h2>{image.description || "No description"}</h2>
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
