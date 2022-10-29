import './App.css';
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick-theme.css";
import Layout from './page/Layout';
import Home from './page/Home';
import About from './page/About';
import Donation from './page/Donation';
import SafeCenter from './page/SafeCenter';
import Login from './page/Login';
import MyPage from './page/MyPage';
import MyProfile from './components/MyProfile';
import MyDonation from './components/MyDonation';
import Questions from './components/Questions';

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/donation' element={<Donation />}/>
          <Route path='/safecenter' element={<SafeCenter />}/>
          <Route path='/login' element={<Login />}/>
        </Route>
        <Route path='/mypage' element={<MyPage />}>
          <Route index element={<MyProfile />} />
          <Route path='/mypage/mydonation' element={<MyDonation />} />
          <Route path='/mypage/questions' element={<Questions />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
