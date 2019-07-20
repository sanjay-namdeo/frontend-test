export const GIPHY_API_KEY = 'WmgaR2KQZltCrjx5SlTQODH0gsiqnKDN';

export const GIPHY_HOST_URL = 'https://api.giphy.com';

export const GIPHY_SEARCH_QUERY = '/v1/gifs/search';

export const getFullUrl = gifId => {
  return `https://media.giphy.com/media/${gifId}/giphy.gif`;
};

export const PAGE_SIZE = 9;
