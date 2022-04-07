import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';
import Profile from './pages/Profile';

const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Social Club</Link>
        </li>
        <li>
          <Link to='profile'>Profile</Link>
        </li>
        <li>
          <Link to='login'>Login</Link>
        </li>
        <li>
          <Link to='register'>Register</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Feed />} />
        <Route path='profile' element={<Profile />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
