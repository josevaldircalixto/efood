import { Container, Logo, SocialIcons, Icon, LegalText } from "./styles";
import logo from "../../assets/logo.svg";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";

const Footer = () => (
  <Container>
    <Logo src={logo} alt="Logo efood" />

    <SocialIcons>
      <Icon src={instagram} alt="Instagram" />
      <Icon src={facebook} alt="Facebook" />
      <Icon src={twitter} alt="Twitter" />
    </SocialIcons>

    <LegalText>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </LegalText>
  </Container>
);

export default Footer;
