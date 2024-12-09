import style from "./Footer.module.css";
import { Row, Col } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
function Footer() {
  return (
    <footer>
      <Row className={style.footer}>
        <Col>
          <div className={style.icon}>
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=100014847841118"
                target="_blank"
              >
                <FacebookIcon style={{ fontSize: "27px" }} />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/mo7amed_0mar_/"
                target="_blank"
              >
                <InstagramIcon style={{ fontSize: "27px" }} />
              </a>
            </div>
            <div>
              <a href="https://wa.me/201157433656 " target="_blank">
                <WhatsAppIcon style={{ fontSize: "27px" }} />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/mohamedomar00"
                target="_blank"
              >
                <LinkedInIcon style={{ fontSize: "27px" }} />
              </a>
            </div>
            <div>
              <a href="https://github.com/Mohammed-Omar-2003 " target="_blank">
                <GitHubIcon style={{ fontSize: "27px" }} />
              </a>
            </div>
          </div>
        </Col>
        <Col>
          <p className={style.name}>
            Developed By <span>Mohamed Omar</span>
          </p>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
