import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Protect the routes with the RequireAuth component
import { RequireAuth, IsLoggedIn } from './helpers';
import { logout } from './redux/authSlice';
// Pages
import Layout from './pages/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import axios from 'axios';
import { ACCESS_TOKEN_KEY } from './constants';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // intercept 401 403 response  and redirect to login
  axios.interceptors.response.use(
    (response) => {
      // check if the response is a success and if theris is a token
      if (response.success && response.accessToken) {
        // set the token in the local storage
        localStorage.setItem(ACCESS_TOKEN_KEY, response.accessToken);
      }
      return response;
    },
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        dispatch(logout());
        navigate('/login');
      }
    }
  );

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={
            <RequireAuth>
              <Feed />
            </RequireAuth>
          }
        />
        <Route
          path='profile'
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path='settings'
          element={
            <RequireAuth>
              <Settings />
            </RequireAuth>
          }
        />
        <Route
          path='login'
          element={
            <IsLoggedIn>
              <Login />
            </IsLoggedIn>
          }
        />
        <Route
          path='register'
          element={
            <IsLoggedIn>
              <Register />
            </IsLoggedIn>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
