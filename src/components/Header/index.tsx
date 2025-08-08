import { Container, Logo, Subtitle } from './styles'
import logo from '../../assets/logo.svg'

const Header = () => (
  <Container >
    <Logo src={logo} alt="efood logo" />
    <Subtitle>Viva experiências gastronômicas <br /> no conforto da sua casa</Subtitle>
  </Container>
)

export default Header
