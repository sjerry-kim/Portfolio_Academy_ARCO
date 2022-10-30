import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Act = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const actCards =[
    { title: "Publishing newsletter",
      img : "homeless_4.jpg"},
    { title: "Matching new Family",
      img : "matchingFamily.jpg"},
    { title: "Safe Center",
      img : "safeCenter.jpg"},
    { title: "Donation & Volunteer Work",
      img : "whale_img.jpg"},
  ]
  
  return (
    <div>
      <Container>
        <Row style={{width: "100%"}}>
          <Col style={{width: "50%"}} className="px-3">
            <Slider {...settings}>
              {
                actCards.map((cards, index)=>(
                  <div key={index} >
                    <img src={require(`../img/${cards.img}`)} style={{width:"100%", height:"500px"}} />
                    <h2 style={{width:"6%", color: "#ffffff" ,position: "fixed", bottom:"5%"}}>{cards.title}</h2>
                  </div>
                ))
              }
            </Slider>
          </Col>
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
    style={{color: "gray", margin: "0"}}/>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon icon={faChevronLeft} 
    className={className}
    onClick={onClick}
    style={{color: "gray",  margin: "0"}}/>
  );
}