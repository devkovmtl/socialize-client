import { Routes, Route } from 'react-router-dom';
// Protect the routes with the RequireAuth component
import { RequireAuth, IsLoggedIn } from './helpers';
// Pages
import Layout from './pages/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

const App = () => {
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
