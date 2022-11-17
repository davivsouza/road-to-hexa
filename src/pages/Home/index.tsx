import { Link } from "react-router-dom"
import { Container, Main } from "./style"
import SloganBanner from '../../assets/slogan-banner.png'
import roadToHexaGames from '../../utils/roadToHexa.json'
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
export function Home() {
  return (
    <Container>
      <Header menuBackground="yellow" />
      <Main>
        <img src={SloganBanner} alt="Slogan Banner" className="flat" />
        <h1>VAMOS <span>JUNTOS</span> RUMO AO HEXA.</h1>
        <p className="description">
          CAMISA VERDE E AMARELA, PÉS NA GRAMA, <span>CORAÇÕES UNIDOS</span> E UM SÓ FOCO: CONQUISTAR O <span>HEXA</span>!
        </p>

        <div className="buttons">
          <Button>
            <Link to={'/road-to-hexa/'}>
              Partiu
            </Link>
          </Button>
          <Button>
            <Link to={`/road-to-hexa/${roadToHexaGames.length}`}>
              Ver Jogos
            </Link>
          </Button>
        </div>
      </Main>
    </Container>

  )
}