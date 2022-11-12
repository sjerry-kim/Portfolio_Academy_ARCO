import { useEffect } from "react";
import Footer from "../components/Footer";
import SubmitVolunteerwork from "../components/SubmitVolunteerwork";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseMedical } from "@fortawesome/free-solid-svg-icons";

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
        <div className="safecenter-title">
        <h1>Safe Center</h1>
          <div className="round-box">
            <div className="round-div"></div>
            <a href="/safecenter"><FontAwesomeIcon icon={faHouseMedical} /></a>
          </div>
        </div>
        <h2>Abused animals stay in the center after being rescued.</h2>
        <div className="safecenter-p">
          <p>The center is managemented by minimal staffes.</p>
          <p>So there are always understaffed.</p>
          <p>The amimals miss the human touch.</p>
          <p>Please be our volunteer.</p>
        </div>
        <div className="submit-vol-box">
          <h1>Volunteer Application</h1>
          <SubmitVolunteerwork />
        </div>
        <Footer />
      </div>
    </body>
  );
}

export default SafeCenter;