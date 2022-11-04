import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import About from "./About";
import Donation from "./Donation";
import Login from "./Login";
import SafeCenter from "./SafeCenter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDove } from "@fortawesome/free-solid-svg-icons";
import Lastest from "../components/Lastest";
import DonationBox from "../components/DonationBox";
import Quiz from "../components/Quiz";
import LookFamily from "../components/LookFamily";
import Footer from "../components/Footer";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Home = () => {

  const [login, setLogin] = useState(false);
  const data = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(()=>{
    setLogin(data.state.user? true :false)
  },[data.state.user])

  useEffect(()=>{
    window.addEventListener("scroll",function(){
      // 프로그래스 바가 있다면 실행할 수 있도록
      if(document.querySelector(".glb-header") != null){ // 비어있는 게 아니라면
          // 프로그래스바 세팅함수 실행
          deleteGlbHeader();
        }
      })
  },[])

      // progress의 width를 스크롤 길이에 따라서 수정
      function deleteGlbHeader(){
        // 스크롤한 높이
        let curreY = document.documentElement.scrollTop;
        
        // 전체 높이
        let totalY = document.documentElement.scrollHeight-document.documentElement.clientHeight;
        
  
        // 퍼센트로 바꿔서 progress css의width값에 넣어주기
        let percentage = (curreY/totalY)*100;
        
        if (percentage>=40){
          document.querySelector(".side-header").style.display = "flex";
          document.querySelector(".side-header").style.animation = "fadein 2s";
        }else{
          document.querySelector(".side-header").style.animation = "fadeout 2s";
          document.querySelector(".side-header").style.display = "none";
        }
      }

  const checkLogin = () =>{
    data.state.user? (
      navigate('/mypage')
    ):(
      navigate('/login')
    )
  }

  const checkLogout = ()=>{
    setLogin(false);
    data.action.setUser(null); // 🤬🤬🤬
    navigate('/'); // 🤬🤬🤬
  }


  return (
    <body className="home-body">
      <div className="big-box">
        <div className="big-title">
          <h1><span>A</span> n i m a l</h1>
          <h1><span>R</span> i g t s</h1>
          <h1><span>C</span> o e x i t e n c e</h1>
          <h1><span>O</span> r g a n i z a t i o n</h1>
        </div>
        <div className="box-link">
          <a href="/">
            <FontAwesomeIcon icon={faDove} style={{paddingRight:"7px"}}/>
            Click & Check the news !
          </a>
        </div>
      </div>
      <div className="side-header delete" >
        <div className="side-title">
          <NavLink to='/' element={<Home />}
          style={{ textDecoration: 'none' , fontWeight: 'bold', color: '#e64a19'}}>
            ARCO
          </NavLink>
        </div>
        <nav className="side-nav">
          <NavLink to='/about' element={<About />} onClick="window.scrollTo(0,0);"
          style={{ textDecoration: 'none' , margin: '8px', color: '#ffffff'}}>
            About Us
          </NavLink>
          <NavLink to='/donation' element={<Donation />} onClick="window.scrollTo(0,0);"
          style={{ textDecoration: 'none' , margin: '8px', color: '#ffffff'}}>
            Donation
          </NavLink>
          <NavLink to='/safecenter' element={<SafeCenter />} onClick="window.scrollTo(0,0);"
          style={{ textDecoration: 'none' , margin: '8px', color: '#ffffff'}}>
            Safe Center
          </NavLink>
        </nav>
        <div className="side-login">
          {
            login? (
              <div>
                <button onClick={()=>{navigate('/mypage')}}>
                  My Page
                </button>
                <button
                  style={{ textDecoration: 'none', color: '#2C3D4F'}}
                  onClick={checkLogout}>
                  Sign Out
                </button>
              </div>
            ):(
              <button
          style={{ textDecoration: 'none', color: '#ffffff'}}
          onClick={checkLogin}>
            Sign In
          </button>
            )
          }
        </div>
      </div>
      <main className="home-main">
        <Lastest />
        <DonationBox />
        <Quiz />
        <LookFamily />
        <Footer />
      </main>
    </body>
  );
}

export default Home;