import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Axios from 'axios';
import { getBannerApi } from '../store/actions';
import Banner from '../components/Banner';

const HomePage = () => {
  const dispatch = useDispatch();
  dispatch(getBannerApi());
  const api = useSelector((state) => state.banner);
  return <>{api && <Banner api={api} />}</>;
};

export default HomePage;

// const HomePage = () => {
//   const [api, useApi] = useState('');
//   useEffect(() => {
//     Axios.get('/api')
//       .then(({ data }) => useApi(data))
//       .catch((err) => {
//         throw err;
//       });
//   }, []);
//   return <>{api && <Banner api={api} />}</>;
// };

// export default HomePage;
