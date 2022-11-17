import RoadToHexaFlat from '../../assets/road-to-hexa.png'
import DateTime from '../../assets/icons/date-icon.svg'
import { Header } from '../../components/Header'
import { Container, Main } from './style'
import roadToHexaJson from '../../utils/roadToHexa.json'
import { Link } from 'react-router-dom'

export function RoadToHexa() {
  return (
    <Container>
      <Header />
      <Main>
        <img src={RoadToHexaFlat} alt="Nosso Brasil" className='flat' />
        <h1>VAMOS<span>JUNTOS</span> EM <span>BUSCA</span> DO <span>HEXA</span></h1>
        <p className="description">
       <span> NOSSA </span> MAIOR <span>FRAQUEZA</span> ESTÁ EM  
       <span> DESISTIR</span>. O <span>CAMINHO</span> MAIS <span>CERTO </span>
        DE <span>VENCER</span> É <span>TENTAR</span> MAIS <span>UMA VEZ</span>
        </p>

        <section>
          <h2>Road To Hexa</h2>
          {roadToHexaJson.map(noticia => (
            <div className="news">
              <Link to={`/road-to-hexa/${noticia.id}`}>
                <img src={noticia.wallpaper} alt={noticia.title} />
                <div>
                  <div className="news-title">
                    <strong>{noticia.title}</strong>
                    <p className='news-date'>
                      <img src={DateTime} alt="Data" />
                      uma semana atrás
                    </p>
                  </div>
                </div>
              </Link>

            </div>
          ))}

        </section>
      </Main>
    </Container>
  )
}