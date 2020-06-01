import axios from 'axios';

const KEY = 'AIzaSyCM-I8IqdbKlNVGL4DJhqSvbJ0DPGR_R8w';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
});
