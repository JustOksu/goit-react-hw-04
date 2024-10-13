import styles from "./Loader.module.css"; // Импортируйте стили, если у вас есть

const Loader = () => {
  return (
    <div className={styles.loader}>
      <p>Загрузка...</p>
      {/* Вы можете добавить анимацию или спиннер */}
    </div>
  );
};

export default Loader;
