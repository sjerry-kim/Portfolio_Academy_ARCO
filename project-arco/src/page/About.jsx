import { useEffect } from "react";
import Act from "../components/Act";
import Footer from "../components/Footer";

const About = () => {

  // 마운트 시 가장 윗쪽 화면이 보이게 하기

  useEffect(()=>{
    window.addEventListener("scroll",function(){
      // glb-header가 있다면 실행할 수 있도록
      if(document.querySelector(".glb-header") != null){ // 비어있는 게 아니라면
          // glb-header 세팅함수 실행
          document.querySelector(".glb-header").style.position = "fixed";
          document.querySelector(".glb-header").style.top = "0";
        }
      })
  },[])

  return (
    <body>
      <div className="about-background">
        <h1>The earth is not a planet that <br /> 
            exists only for humans. </h1>
        <h1>Arco will take the lead in making a better world <br />
            that coexists with animals.</h1>
        <Act />
        <Footer />
      </div>
    </body>
  );
}

export default About;