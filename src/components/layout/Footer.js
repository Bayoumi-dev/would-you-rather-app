import Container from "./Container";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "../../utils/svg";
const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="me">&copy; Bayoumi-dev</div>
        <div className="social">
          <ul>
            <li className="github">
              <a
                href="https://github.com/Bayoumi-dev/"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
              </a>
            </li>
            <li className="insta">
              <a
                href="https://www.instagram.com/abayoumi100/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
            </li>
            <li className="linked">
              <a
                href="https://www.linkedin.com/in/bayoumi-dev/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
