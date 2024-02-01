import { DOMAIN_API_URL } from './index';

export const API_UPLOAD_IMAGE = `${DOMAIN_API_URL}/upload/image_url`;

export const CONFIG = {
  GET: {
    CONFIG: '/enum-data',
  },
};

export const DASHBOARD = {
  GET: {
    TABLE: '/list-data',
  },
};


export const USER = {
  GET: {
    USERS: '/users',
  },
  POST: {
    CREATE_USER: '/users',
  },
  PUT: {
    UPDATE_USER: '/users',
    BLOCK_USER: '/users/block',
    UNBLOCK_USER: '/users/unblock',
  },
};

export const AUTH = {
  GET: {
    CHECK_SESSION: '/auth/session',
  },
  POST: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
  }
};
const API = {
  CONFIG,
  DASHBOARD,
  AUTH,
};

export default API;
