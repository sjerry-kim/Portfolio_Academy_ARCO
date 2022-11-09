import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Act = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
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

  const navigate= useNavigate();
  
  return (
    <div className="act-box">
      <h1>Acts</h1>
      <Container>
        <Row>
          
            <Slider {...settings}>
              {
                actCards.map((cards, index)=>(
                  <div key={index}>
                    <img src={require(`../img/${cards.img}`)} onClick={()=>{ navigate(cards.url); window.scrollTo(0,0)}} /* 보수 ! *//>
                    <h2>{cards.title}</h2>
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