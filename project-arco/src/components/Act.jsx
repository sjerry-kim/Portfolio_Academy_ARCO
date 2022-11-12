import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Act = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 804,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const actCards =[
    { title: "Publishing newsletter",
      img : "homeless_4.jpg",
      url : "/about/publishing_newsletter"},
    { title: "Matching new Family",
      img : "matchingFamily.jpg",
      url : "/about/matching_family"},
    { title: "Safe Center",
      img : "safeCenter.jpg",
      url : "/safecenter"},
    { title: "Donation & Volunteer Work",
      img : "whale_img.jpg",
      url: "/donation"},
  ]

  /*
  const lightText = () => {
    document.querySelector(".act-box .slick-slider h2").style.textShadow = "0 0 5px lemonchiffon";
  }
  */

  const navigate= useNavigate();
  
  return (
    <div className="act-box">
      <h1>Acts</h1>
      <Container>
        <Row>
          
            <Slider {...settings}>
              {
                actCards.map((cards, index)=>(
                  <div className="slider-div" key={index} 
                    onClick={()=>{ navigate(cards.url); window.scrollTo(0,0)}}
                    /*onMouseOver={()=>{lightText()}}*/>
                    <img src={require(`../img/${cards.img}`)}/>
                    <h2 className="slider-text">{cards.title}</h2>
                  </div>
                ))
              }
            </Slider>
          
        </Row>
      </Container>
    </div>
  );
}

export default Act;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon icon={faChevronRight} 
    className={className}
    onClick={onClick}
    style={{color: "rgba(239, 239, 239, 0.3)", margin: "0"}}/>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon icon={faChevronLeft} 
    className={className}
    onClick={onClick}
    style={{color: "rgba(239, 239, 239, 0.3)",  margin: "0"}}/>
  );
}