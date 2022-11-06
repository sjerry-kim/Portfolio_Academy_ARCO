import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Lastest = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
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
  
  return (
    <div>
      <h2 style={{ marginBottom:" 50px", fontSize:"2.3em" }}>Abandoned Animals</h2>
        <Container style={{ marginBottom:" 60px" }}>
          <Row>
            <Col>
              <Slider {...settings}>
                {
                  lastestImage.map((img,index)=>(
                    <div key={index} className="mb-4">
                        <img style={{width: "1050px", height: "600px", margin:"auto", objectFit:"cover", objectPosition:" top center" }} src={require(`../img/${img.img}`)}/>
                    </div>
                  ))
                }
              </Slider>
              <div style={{width:"150px", height:"130px",
                            display:"flex", backgroundColor:"darkgreen", position: "absolute", left:"5%" ,bottom:"66%"}}>
                <p style={{ margin: "auto", fontSize:"1.8em", fontWeight:"bold", color:"white"}}>Divcover<br />more</p>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Lastest;

