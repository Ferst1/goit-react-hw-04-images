import axios from 'axios';

const API_KEY = '38917761-3df8dcef6ff50ecc382f6f666';
const BASE_URL = 'https://pixabay.com/api/';

async function fetchImages(searchResult, pageNumber) {
  const searchParams = new URLSearchParams({
    q: searchResult,
    page: pageNumber,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

  const response = await axios.get(`${BASE_URL}?${searchParams}`);
  return await response.data;
}

export { fetchImages };
