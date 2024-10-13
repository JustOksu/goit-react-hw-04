import { useState, useEffect } from "react";
import { fetchImages } from "./components/Services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchImagesData = async () => {
      if (!query) return;
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (error) {
        console.error("Ошибка при загрузке изображений:", error);
        setError("Не удалось загрузить изображения. Попробуйте еще раз.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImagesData();
  }, [query, page]);

  const handleSearchSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSearchSubmit={handleSearchSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ImageGallery
        images={images}
        onImageClick={handleImageClick}
        onLoadMore={handleLoadMore}
      />
      {isModalOpen && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
