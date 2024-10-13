import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
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
    </Modal>
  );
};

export default ImageModal;
