import propTypes from 'prop-types';
import { ButtonBox, LoadButton } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonBox>
      <LoadButton onClick={onClick}>Load more</LoadButton>
    </ButtonBox>
  );
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
