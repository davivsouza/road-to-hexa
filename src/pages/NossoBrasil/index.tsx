import NossoBrasilFlat from '../../assets/nosso-brasil-flat.png'
import { PageTemplate } from '../../components/PageTemplate'
import news from '../../utils/news.json'
import { Container } from '../../styles/container-pages'

export function NossoBrasil() {
  return (
    <Container>
      <PageTemplate
        hasNews
        title='UM PAÍS DE <span>GUERREIROS</span>'
        description='VAMOS JUNTOS <span>DESVENDAR</span> ESSE PAÍS <span>INCRÍVEL</span> EM QUE NÓS VIVEMOS.'
        url='/nosso-brasil'
        news={news.nossoBrasil}
        flatPath={NossoBrasilFlat}
      />
    </Container>
  )
}