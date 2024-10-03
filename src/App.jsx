import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

const API_KEY = "46326907-7c0cd8a2d50d47dcd2bff6a67";

const App = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async (query) => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo`
      );
      setImages(response.data.hits);
    } catch (error) {
      console.error("Error fetching images", error);
    }
  };

  const handleSearch = (query) => {
    fetchImages(query);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
