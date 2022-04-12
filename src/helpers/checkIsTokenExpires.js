import getJwtExpiresIn from './getJwtExpiresIn';

export default function checkIsTokenExpires(token) {
  const expires = getJwtExpiresIn(token);
  const now = new Date().getTime();
  return expires < now;
}
