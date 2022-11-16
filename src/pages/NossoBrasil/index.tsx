import NossoBrasilFlat from '../../assets/nosso-brasil-flat.png'
import DateTime from '../../assets/icons/date-icon.svg'
import { Header } from '../../components/Header'
import { Container, Main } from './style'
import news from '../../utils/news.json'
import { Link } from 'react-router-dom'
export function NossoBrasil() {
  return (
    <Container>
      <Header />
      <Main>
        <img src={NossoBrasilFlat} alt="Nosso Brasil" className='flat' />
        <h1>UM PAÍS DE <span>GUERREIROS</span></h1>
        <p className="description">
          VAMOS JUNTOS <span>DESVENDAR</span> ESSE PAÍS <span>INCRÍVEL</span> EM QUE NÓS VIVEMOS.
        </p>

        <section>
          <h2>Nosso Brasil</h2>
          {news.map(noticia => (
            <div className="news">
              <Link to={`/nosso-brasil/${noticia.id}`}>
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