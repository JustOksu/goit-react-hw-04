import ImageCard from "../ImageCard/ImageCard";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

const ImageGallery = ({ images, onImageClick, onLoadMore }) => {
  const handleLoadMore = () => {
    onLoadMore();
  };

  return (
    <div>
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
