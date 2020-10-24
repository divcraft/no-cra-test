import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Banner from '../components/Banner';

const HomePage = () => {
  const [api, useApi] = useState('');
  useEffect(() => {
    Axios.get('/api')
      .then(({ data }) => useApi(data))
      .catch((err) => {
        throw err;
      });
  }, []);
  return <>{api && <Banner api={api} />}</>;
};

export default HomePage;
