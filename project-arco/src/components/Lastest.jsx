import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Lastest = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const lastestImage = [
    { img: "homeless_1.jpg" },
    { img: "homeless_2.jpg" },
    { img: "homeless_3.jpg" }
  ];
  
  return (
    <div>
      <h2>Lastest</h2>
        <Container >
          <Row className="m-5">
            <Col className="px-1">
              <Slider {...settings}>
                {
                  lastestImage.map((img,index)=>(
                    <div key={index}>
                        <img style={{width: "600px", height: "400px", marginRight:"0", marginLeft:"5%"}} src={require(`../img/${img.img}`)}/>
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

export default Lastest;

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