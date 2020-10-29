import Axios from 'axios';
import { useState, useEffect } from 'react';

export const getBannerApi = () => {
  return (dispatch) => {
    const [api, setApi] = useState('');
    useEffect(() => {
      Axios.get('/api')
        .then(({ data }) => setApi(data))
        .catch((err) => {
          throw err;
        });
    }, []);
    console.log('api from action file:', api);
    dispatch({
      type: 'GET_BANNER_API',
      payload: api,
    });
  };
};
