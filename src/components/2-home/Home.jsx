import style from "./Home.module.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Lottie from "lottie-react";
import develper from "/public/animation/developer.json";
function Home() {
  return (
    <div className={style.home}>
      <div className={style.left}>
        <div className={style.image}>
          <img src="/img/my-img.png" alt="imge" />
          <span>
            <VerifiedIcon />
          </span>
        </div>
        <div className={style.text}>
          <h2>hello, I'm</h2>
          <h1>Mohamed</h1>
          <h2>I'm FrontEnd Developer</h2>
        </div>
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
            <a href="https://www.instagram.com/mo7amed_0mar_/" target="_blank">
              <InstagramIcon style={{ fontSize: "27px" }} />
            </a>
          </div>
          <div>
            <a href="https://wa.me/201157433656 " target="_blank">
              <WhatsAppIcon style={{ fontSize: "27px" }} />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/mohamedomar00" target="_blank">
              <LinkedInIcon style={{ fontSize: "27px" }} />
            </a>
          </div>
          <div>
            <a href="https://github.com/Mohammed-Omar-2003 " target="_blank">
              <GitHubIcon style={{ fontSize: "27px" }} />
            </a>
          </div>
        </div>
        <div className={style.cv}>
          <a
            href="/pdf/Mohamed-Omar-cv-2024.pdf"
            download="Mohamed_Omar_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div> Download Cv</div>
            <div className={style.download}>
              <CloudDownloadIcon />
            </div>
          </a>
        </div>
      </div>
      <div className={style.right}>
        <Lottie animationData={develper} />
      </div>
    </div>
  );
}

export default Home;
