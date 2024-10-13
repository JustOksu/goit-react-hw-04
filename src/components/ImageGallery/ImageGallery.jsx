import { useState } from "react";
import ImageCard from "../ImageCard/ImageCard";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"; // Импортируем кнопку "Load More"

const ImageGallery = ({ images, onImageClick, onLoadMore, onSearchSubmit }) => {
  const [searchQuery, setSearchQuery] = useState(""); // Состояние для поискового запроса

  const handleLoadMore = () => {
    onLoadMore(); // Вызов функции для загрузки дополнительных изображений
  };

  const handleSearch = (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    onSearchSubmit(searchQuery); // Вызываем функцию поиска
    setSearchQuery(""); // Очищаем поле поиска после отправки
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Обновляем состояние запроса
          placeholder="Search images..."
        />
        <button type="submit">Search</button> {/* Кнопка отправки поиска */}
      </form>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard image={image} onClick={() => onImageClick(image)} />
          </li>
        ))}
      </ul>
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
    </div>
  );
};

export default ImageGallery;
