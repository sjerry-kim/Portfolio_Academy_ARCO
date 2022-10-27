import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import About from "./About";
import Donation from "./Donation";
import Login from "./Login";
import SafeCenter from "./SafeCenter";

const Home = () => {

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


  return (
    <body className="home-body">
      <div className="big-title-capital">
        <h1>A</h1>
        <h1>R</h1>
        <h1>C</h1>
        <h1>O</h1>
      </div>
      <div className="big-title-small">
        <h1>n i m a l</h1>
        <h1>i g t s</h1>
        <h1>o e x i t e n c e</h1>
        <h1>r g a n i z a t i o n</h1>
      </div>
      <div className="side-header delete" >
        <div className="side-title">
          <NavLink to='/' element={<Home />}
          style={{ textDecoration: 'none' , fontWeight: 'bold', color: '#e64a19'}}>ARCO</NavLink>
        </div>
        <nav className="side-nav">
          <NavLink to='/about' element={<About />}
          style={{ textDecoration: 'none' , margin: '8px', color: '#ffffff'}}
          >About Us</NavLink>
          <NavLink to='/donation' element={<Donation />}
          style={{ textDecoration: 'none' , margin: '8px', color: '#ffffff'}}
          >Donation</NavLink>
          <NavLink to='/safecenter' element={<SafeCenter />}
          style={{ textDecoration: 'none' , margin: '8px', color: '#ffffff'}}
          >Safe Center</NavLink>
        </nav>
        <div className="side-login">
          <NavLink to='/login' element={<Login />}
          style={{ textDecoration: 'none', color: '#ffffff'}}
          >Sign In</NavLink>
        </div>
      </div>
      <main className="home-main">
      </main>
    </body>
  );
}

export default Home;