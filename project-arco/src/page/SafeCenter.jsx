import { useEffect } from "react";
import Footer from "../components/Footer";

const SafeCenter = () => {

  // 마운트 시 가장 윗쪽 화면이 보이게 하기

  useEffect(()=>{
    window.addEventListener("scroll",function(){
      // glb-header가 있다면 실행할 수 있도록
      if(document.querySelector(".glb-header") != null){ // 비어있는 게 아니라면
          // glb-header 세팅함수 실행
          document.querySelector(".glb-header").style.position = "sticky";
          document.querySelector(".glb-header").style.top = "0";
        }
      })
  },[])

  return (
    <body>
      <div className="safecenter-background">
        <Footer />
      </div>
    </body>
  );
}

export default SafeCenter;