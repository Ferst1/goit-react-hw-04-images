import propTypes from 'prop-types';
import { SearchForm, SearchHeader } from './Searchbar.styled';
import { useState } from 'react';

export const Searchbar = ({ submitHandler }) => {
  const [searchInput, setSearchInput] = useState('');
  const inputSearchData = e => {
    e.preventDefault();
    submitHandler(searchInput);
    setSearchInput('');
  };

  return (
    <SearchHeader>
      <SearchForm onSubmit={inputSearchData}>
        <button type="submit">
          <img
            src={require('../../images/icons8-search-50.png')}
            alt="search"
          />
        </button>

        <input
          name="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
      </SearchForm>
    </SearchHeader>
  );
};

Searchbar.propTypes = {
  submitHandler: propTypes.func.isRequired,
};
