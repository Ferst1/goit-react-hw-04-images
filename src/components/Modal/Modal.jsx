import { useEffect } from 'react';
import propTypes from 'prop-types';
import { ModalDiv, Overlay } from './Modal.styled';

export const Modal = ({ eventHandler, imageLink }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        eventHandler();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [eventHandler]);

  const handleClick = event => {
    if (event.target === event.currentTarget) {
      eventHandler();
    }
  };

  return (
    <Overlay onClick={handleClick}>
      <ModalDiv>
        <img src={imageLink} alt="" />
      </ModalDiv>
    </Overlay>
  );
};

Modal.propTypes = {
  eventHandler: propTypes.func.isRequired,
  imageLink: propTypes.string.isRequired,
};
