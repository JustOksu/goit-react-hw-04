import styles from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onClick(image)}
        className={styles.image}
      />
    </div>
  );
};

export default ImageCard;
