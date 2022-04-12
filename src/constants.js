export const USER_KEY = 'user';
export const ACCESS_TOKEN_KEY = 'accessToken';

export const BASE_URL = 'http://localhost:8080';
export const LOGIN_URL = `${BASE_URL}/api/v1/login`;
export const REGISTER_URL = `${BASE_URL}/api/v1/register`;

export const FormRulesOptions = {
  username: {
    required: 'Username is required',
  },
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Invalid email address',
    },
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters',
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      message:
        'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
    },
  },
};
