import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const Lastest = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    arrows: false,
  };
  const lastestImage = [
    { img: "homeless_1.jpg" },
    { img: "homeless_2.jpg" },
    { img: "homeless_3.jpg" }
  ];

  const navigate = useNavigate();

  const moveNewsletter = () => {
    navigate('/about/publishing_newsletter');
    window.scroll(0,0);
  }
  
  return (
    <div className="lastest-box">
      <h2>Abandoned Animals</h2>
        <Container>
          <Row>
            <Col>
              <Slider {...settings}>
                {
                  lastestImage.map((img,index)=>(
                    <div key={index} >
                        <img src={require(`../img/${img.img}`)}/>
                    </div>
                  ))
                }
              </Slider>
              <div className="discover-box">
                <a style={{color:"#205375"}} onClick={moveNewsletter}>Divcover<br />more</a>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Lastest;

