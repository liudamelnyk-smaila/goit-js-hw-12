import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55217481-c9b20e60bb4f0a7ff60eb70d3';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      page,
      per_page: PER_PAGE,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}