
import { Link, useParams } from 'react-router-dom'
import news from '../../../utils/news.json'
import leftArrow from '../../../assets/icons/left-arrow.svg'
import { Container } from './style'

export function News(){

  const {id} = useParams()
  const noticia = news.find(item => (item.id === Number(id)))
  if(noticia){
    return (
      <Container>
        <Link to="/nosso-brasil">
          <img src={leftArrow} alt="Left Arrow" className="back"/>
        </Link>
        <img src={noticia.wallpaper} alt={noticia.title} className="wallpaper"/>
        <h1>{noticia.title}</h1>
        <p>uma semana atrás <span>{noticia.time}</span></p>

        <div className="news-content" dangerouslySetInnerHTML={{__html: noticia.content}} />

      </Container>

    )
  }else{
    return <h1>LOADING...</h1>
  }
}