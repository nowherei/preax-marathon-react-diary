import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID m3kd1314p5hfoLu5XlaBz0upDLB3vAtADlMnRCPoZjw'
  }
});

export const getImages = async (term) => {
  const res = await instance.get('search/photos', {
    params: { query: term },
  });

  return res.data.results;
}