import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ imageGalleryItems, itemOnClick }) => {
  return (
    <ImageGalleryList>
      {imageGalleryItems.map(imageGalleryItem => (
        <ImageGalleryItem
          key={imageGalleryItem.id}
          largeImageLink={imageGalleryItem.largeImageURL}
          imageLink={imageGalleryItem.webformatURL}
          onClick={itemOnClick}
        />
      ))}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  imageGalleryItems: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      largeImageURL: propTypes.string.isRequired,
      webformatURL: propTypes.string.isRequired,
    })
  ).isRequired,
  itemOnClick: propTypes.func.isRequired,
};
