import NossoHistoriaFlat from '../../assets/nossa-historia.png'
import DateTime from '../../assets/icons/date-icon.svg'
import { Header } from '../../components/Header'
import { Container, Main } from './style'
import ourhistoryNews from '../../utils/ourHistory.json'
import { Link } from 'react-router-dom'
export function NossaHistoria() {
  return (
    <Container>
      <Header />
      <Main>
        <img src={NossoHistoriaFlat} alt="Nosso Brasil" className='flat' />
        <h1>O PÁIS DO <span>FUTEBOL</span></h1>
        <p className="description">
          <span>NENHUM JOGADOR</span> É TÃO BOM COMO <span>TODOS JUNTOS</span>.
        </p>

        <section>
          <h2>Nossa História</h2>
          {ourhistoryNews.map(noticia => (
            <div className="news">
              <Link to={`/nossa-historia/${noticia.id}`}>
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