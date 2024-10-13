import styles from "./LoadMoreBtn.module.css"; // Импортируйте стили, если у вас есть

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={styles.loadMoreBtn} onClick={onClick}>
      Загрузить больше
    </button>
  );
};

export default LoadMoreBtn;
