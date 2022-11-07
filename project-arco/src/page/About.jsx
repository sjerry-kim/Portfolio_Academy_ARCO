import { useEffect } from "react";
import Act from "../components/Act";
import Footer from "../components/Footer";

const About = () => {

  useEffect(()=>{
    document.querySelector(".first-sentence").style.opacity = "1"
  })

  useEffect(()=>{
    window.addEventListener("scroll",function(){
          scrollSentence();
        })
  },[])

      function scrollSentence(){
        // 스크롤한 높이
        let curreY = document.documentElement.scrollTop;
        
        // 전체 높이
        let totalY = document.documentElement.scrollHeight-document.documentElement.clientHeight;
        
  
        // 퍼센트로 바꿔서 progress css의width값에 넣어주기
        let percentage = (curreY/totalY)*100;
        
        if (percentage>=2 && percentage<39){
          document.querySelector(".first-sentence").style.opacity = "0"
          
        }else if(percentage>=39 && percentage<48){
          document.querySelector(".second-sentence").style.opacity = "0"
        }
        else{
          document.querySelector(".first-sentence").style.opacity = "1"
          document.querySelector(".second-sentence").style.opacity = "1"
        }
      }

  return (
    <body>
      <div className="about-background">
        
          <h1 className="first-sentence">The earth is not a planet that <br /> 
            exists only for humans. </h1>
        
        <h1 className="second-sentence">Arco will take the lead in making a better world <br />
            that coexists with animals.</h1>
        <Act />
        <Footer />
      </div>
    </body>
  );
}

export default About;