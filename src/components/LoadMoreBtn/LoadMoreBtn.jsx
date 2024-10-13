import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={styles.loadMoreBtn} onClick={onClick}>
      Загрузить больше
    </button>
  );
};

export default LoadMoreBtn;
