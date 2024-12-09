import style from "./About.module.css";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

function About() {
  return (
    <div className={style.about} id="About">
      <div className={style.title}>
        <h1>
          About<span>Me</span>
        </h1>
      </div>
      <div className={style.data}>
        <div className={style.image}>
          <img src="/img/fullImage.jpg" />
        </div>
        <div className={style.text}>
          <h2>Mohamed Omar</h2>
          <h3>FrontEnd Developer</h3>
          <p>
            I'm a Frontend Developer based in Egypt who is passionate about
            delivering value to businesses through technology. I love the
            challenge of finding creative solutions to problems, and I enjoy
            collaborating with teams to achieve great results.
          </p>
        </div>
        <div></div>
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
  );
}

export default About;
