import { useState } from "react";
import { Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchImages } from "./components/Services/api";

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleSearchSubmit = async (query) => {
    setIsLoading(true);
    setError("");
    setQuery(query);
    try {
      const data = await fetchImages(query, page);
      setImages(data.results);
      setPage(1);
    } catch (error) {
      console.error("Ошибка при загрузке изображений:", error);
      setError("Не удалось загрузить изображения. Попробуйте еще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setIsLoading(true);
    try {
      const data = await fetchImages(query, page + 1);
      setImages((prevImages) => [...prevImages, ...data.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Ошибка при загрузке изображений:", error);
      setError("Не удалось загрузить изображения. Попробуйте еще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Toaster />
      <ImageGallery
        images={images}
        onImageClick={handleImageClick}
        onLoadMore={handleLoadMore}
        onSearchSubmit={handleSearchSubmit}
        isLoading={isLoading}
      />
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={handleCloseModal} />
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;
