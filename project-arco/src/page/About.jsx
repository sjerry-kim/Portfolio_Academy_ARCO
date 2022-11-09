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
        let curreY = document.documentElement.scrollTop;
        
        let totalY = document.documentElement.scrollHeight-document.documentElement.clientHeight;
        
        let percentage = (curreY/totalY)*100;
        
        if (percentage>=1 && percentage<10){
          document.querySelector(".first-sentence").style.opacity = "0"
          
        }else if(percentage>=53 ){
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
        <h1 className="first-sentence">
          The earth is not a planet that <br /> 
          exists only for humans.
        </h1>
        <div className="second-sentence-box">
          <h1 className="second-sentence">
            Arco will take the lead in making a better world <br />
            that coexists with animals.
          </h1>
        </div>
        <Act />
        <Footer />
      </div>
    </body>
  );
}

export default About;