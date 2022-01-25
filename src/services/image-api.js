import axios from 'axios';

const API_KEY = '21934405-57162f124158c436f0bdddd5d';
const BASE_URL = 'https://pixabay.com/api';

// https://pixabay.com/api/?key=21934405-57162f124158c436f0bdddd5d&q=yellow+flowers&image_type=photo

const getCats = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/?key=${API_KEY}&q=cat&image_type=photo`,
    );
    return data.hits.slice(0, 11);
  } catch (error) {
    console.log('Something went wrong:', error);
  }
};

const catsAPI = getCats;

export default catsAPI;
