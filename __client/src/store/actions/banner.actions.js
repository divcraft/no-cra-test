import Axios from 'axios';
import { useEffect } from 'react';

export const getBannerApi = () => (dispatch) => {
  useEffect(() => {
    Axios.get('/api')
      .then(({ data }) => {
        dispatch({
          type: 'GET_BANNER_API',
          payload: data,
        });
      })
      .catch((err) => {
        throw err;
      });
  }, []);
};
