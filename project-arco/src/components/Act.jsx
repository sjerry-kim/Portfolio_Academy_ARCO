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
      url: "/about/donation_volunteerwork"},
  ]

  const navigate= useNavigate();
  
  return (
    <div>
      <Container style={{margin:"auto", display:"flex", justifyContent:"center"}}>
        <Row style={{width: "100%"}}>
          <Col>
            <Slider {...settings}>
              {
                actCards.map((cards, index)=>(
                  <div key={index}>
                    <img src={require(`../img/${cards.img}`)} onClick={()=>{navigate(cards.url)}}
                        style={{width:"100%", height:"500px", objectFit:"cover", objectPosition:"center"}} />
                    <h2 style={{width:"8%", fontSize:"1.7em", color: "#ffffff" ,position: "fixed", bottom:"3%", textAlign:"left", marginLeft:"10px"}}>{cards.title}</h2>
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