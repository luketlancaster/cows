import cows from '../../helpers/data/cows';

import './cowList.scss';

const buildCows = () => {
  cows.getCows()
    .then(response => {
      console.log('It worked!', response.data);
    })
    .catch(error => {
      console.error('It didn\'t!', error);
    });
};

export default {
  buildCows,
};
