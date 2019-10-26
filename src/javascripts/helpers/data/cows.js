import axios from 'axios';

const getCows = () => axios.get('https://teamtreehouse.com/lukelancaster.json');

export default { getCows };
