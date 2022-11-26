import { Link } from "react-router-dom"
import { Container, Main } from "./style"
import SloganBanner from '../../assets/slogan-banner.png'
import  news  from '../../utils/news.json'
import { Button } from "../../components/Button"
import { PageTemplate } from "../../components/PageTemplate"
export function Home() {
  return (
    <Container>
      <PageTemplate
        hasNews={false}
        menuBackground={'yellow'}
        title='VAMOS <span>JUNTOS</span> RUMO AO HEXA.'
        description='CAMISA VERDE E AMARELA, PÉS NA GRAMA, <span>CORAÇÕES UNIDOS</span> E UM SÓ FOCO: CONQUISTAR O <span>HEXA</span>!'
        flatPath={SloganBanner}
      />

      <div className="buttons">
        <Button>
          <Link to={'/road-to-hexa/'}>
            Partiu
          </Link>
        </Button>
        <Button>
          <Link to={`/road-to-hexa/${news.roadToHexa.length}`}>
            Ver Jogos
          </Link>
        </Button>
      </div>
    </Container>

  )
}


