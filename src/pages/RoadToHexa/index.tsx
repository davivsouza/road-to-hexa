import RoadToHexaFlat from '../../assets/road-to-hexa.png'
import news from '../../utils/news.json'
import { PageTemplate } from '../../components/PageTemplate'
import { Container } from '../../styles/container-pages'


export function RoadToHexa() {
  return (
    <Container>
      <PageTemplate
        hasNews
        title='VAMOS<span> JUNTOS</span> EM <span>BUSCA</span> DO <span>HEXA</span>'
        description='<span> NOSSA </span> MAIOR <span>FRAQUEZA</span> ESTÁ EM  <span> DESISTIR</span>. O <span>CAMINHO</span> MAIS <span>CERTO </span>DE <span>VENCER</span> É <span>TENTAR</span> MAIS <span>UMA VEZ</span>'
        url='/road-to-hexa'
        news={news.roadToHexa}
        flatPath={RoadToHexaFlat}
      />
    </Container>
  )
}