import propTypes from 'prop-types';
import { ImageGalleryItems } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ largeImageLink, imageLink, onClick }) => {
  return (
    <ImageGalleryItems onClick={() => onClick(largeImageLink)}>
      <img src={imageLink} alt="" />
    </ImageGalleryItems>
  );
};

ImageGalleryItem.propTypes = {
  largeImageLink: propTypes.string.isRequired,
  imageLink: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
