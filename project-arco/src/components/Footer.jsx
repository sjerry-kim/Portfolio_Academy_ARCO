import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faYoutube, faFacebook} from "@fortawesome/free-brands-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-p">
        <p>ANIMAL RIGHTS COEXITENCE ORGANIZATION. ARCO</p>
        <p>TEL : 000-000-0000 {" "} | FAX : 0000-000-0000</p>
        <p>EMAIL : 00000@00000.com</p>
        <p>&copy; 2022 ARCO. ALL RIGTHS RESERVED</p>
      </div>
      <div className="footer-icon">
        <a href="https://twitter.com/?lang=ko" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.youtube.com/" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
        <a href="https://ko-kr.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://www.kakaocorp.com/page/service/service/KakaoTalk" target="_blank"><FontAwesomeIcon icon={faCommentDots} /></a>
      </div>
    </div>
  );
}

export default Footer;