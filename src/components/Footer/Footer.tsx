import { Column, Container, Row, Title } from "../../styles/GlobalComponents";
import LinkedinIcon, { MailIcon } from "../Essential/Icons";
import { FooterWrapper } from "./FooterStyled";

export default function Footer() {
  return (
    <FooterWrapper id="hero">
      <Container>
        <Row className="">
          <Column xl={12} xs={12} sm={12} md={12} className="footer_left">
            <p>
              © {new Date().getFullYear()} Mikaël Freva
            </p>
            <p>
              <a href="mentions-legales">Mentions légales</a>
            </p>
          </Column>
          <Column xl={12} xs={12} sm={12} md={12} className="footer_right">
        
      
          <MailIcon/>
              <LinkedinIcon/>
            
          </Column>
        </Row>
      </Container>
    </FooterWrapper>
  );
}
