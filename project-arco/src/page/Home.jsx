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
          document.querySelector("#delete").style.display = "flex";
        }else{
          document.querySelector("#delete").style.display = "none";
        }
      }


  return (
    <body className="home-body">
      <main className="home-main">
      </main>
      <div className="side-header" id="delete" >
        <div className="side-title">
          <NavLink to='/' element={<Home />}>ARCO</NavLink>
        </div>
        <nav className="side-nav">
          <NavLink to='/about' element={<About />}>About Us</NavLink>
          <NavLink to='/donation' element={<Donation />}>Donation</NavLink>
          <NavLink to='/safecenter' element={<SafeCenter />}>Safe Center</NavLink>
        </nav>
        <div className="side-login">
          <NavLink to='/login' element={<Login />}>Sign In</NavLink>
        </div>
      </div>
    </body>
  );
}

export default Home;