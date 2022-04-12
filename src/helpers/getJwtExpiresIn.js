import jwtDecode from 'jwt-decode';

// call this function to get the expiration time of the token
// localStorage.getItem(ACCESS_TOKEN_KEY);
// return number of seconds
export default function getJwtExpiresIn(token) {
  if (!token) {
    return 0;
  }
  const decoded = jwtDecode(token);
  return decoded.exp * 1000;
}
