import NossoHistoriaFlat from '../../assets/nossa-historia.png'
import news from '../../utils/news.json'
import { PageTemplate } from '../../components/PageTemplate'
import { Container } from '../../styles/container-pages'
export function NossaHistoria() {
  return (
    <Container>
      <PageTemplate
        hasNews
        title='O PÁIS DO <span>FUTEBOL</span>'
        description='<span>NENHUM JOGADOR</span> É TÃO BOM COMO <span>TODOS JUNTOS</span>.'
        url='/nossa-historia'
        news={news.nossaHistoria}
        flatPath={NossoHistoriaFlat}
      />
    </Container>

  )
}