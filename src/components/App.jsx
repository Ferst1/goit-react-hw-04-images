import React, { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { fetchImages } from '../services/fetchImages';

export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [modalImageLink, setModalImageLink] = useState('');

  const getSearchResults = searchResultData => {
    setIsLoadMore(false);
    setImages([]);
    setSearchResult(searchResultData);
    setPage(1);
  };

  useEffect(() => {
    const fetchImageData = async () => {
      if (!searchResult) return;
      setIsLoading(true);

      try {
        const imagesData = await fetchImages(searchResult, page);
        if (imagesData.length === 0) {
          throw new Error('Sorry, no results...');
        }

        const isLoadMore = page < Math.ceil(imagesData.totalHits / 12);
        setImages(prevImages => [...prevImages, ...imagesData.hits]);
        setIsLoadMore(isLoadMore);
        setTotalHits(imagesData.totalHits);

        if (!isLoadMore) {
          Notiflix.Notify.warning(
            'We are sorry, but you have reached the end of search results.'
          );
        }
      } catch (error) {
        setIsLoadMore(false);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImageData();
  }, [searchResult, page]);

  const openModal = largeImageLink => {
    setIsModal(true);
    setModalImageLink(largeImageLink);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const loadMoreFunction = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      {isModal && (
        <Modal eventHandler={closeModal} imageLink={modalImageLink} />
      )}
      <Searchbar submitHandler={getSearchResults} />
      {isLoading && <Loader />}
      <ImageGallery imageGalleryItems={images} itemOnClick={openModal} />
      {isLoadMore && <Button onClick={loadMoreFunction} />}
    </div>
  );
};
