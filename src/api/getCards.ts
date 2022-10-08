import data from './data.json';

export const getCards = () => {
  return Promise.resolve(Object.assign({}, data));
};
