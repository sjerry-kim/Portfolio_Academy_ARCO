// css 파일 import
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// 공용으로 쓸 dataContext Provider import
import { DataProvider } from './context/DataContext'

// 기타 라이브러리, 컴포넌트 import
import {Routes, Route} from 'react-router-dom';
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
import PublishingNewsletter from './page/PublishingNewsletter';
import MatchingFamily from './page/MatchingFamily';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/donation' element={<Donation />}/>
            <Route path='/safecenter' element={<SafeCenter />}/>
            <Route path='/login' element={<Login />}/>
          </Route>
          <Route path='/about/publishing_newsletter'element={<PublishingNewsletter />}/>
          <Route path='/about/matching_family' element={<MatchingFamily />}/>
          <Route path='/mypage' element={<MyPage />}>
            <Route index element={<MyProfile />} />
            <Route path='/mypage/mydonation' element={<MyDonation />} />
            <Route path='/mypage/questions' element={<Questions />} />
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
