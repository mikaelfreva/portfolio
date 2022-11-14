import { SocialWrapper } from './Social.styles';
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Social() {



  return (
    <SocialWrapper>
    <a href="https://google.com" target="_blank" rel="noreferrer">
<FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
</a>
<a href="https://google.com" target="_blank" rel="noreferrer">
<FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
</a>
</SocialWrapper>
  );
};


