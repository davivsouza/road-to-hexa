
import { Link, useParams } from 'react-router-dom'
import ourHistoryNews from '../../../utils/ourHistory.json'
import leftArrow from '../../../assets/icons/left-arrow.svg'
import { Container } from './style'

export function OurHistory(){

  const {id} = useParams()
  const noticia = ourHistoryNews.find(item => (item.id === Number(id)))
  if(noticia){
    return (
      <Container>
        <Link to="/nossa-historia">
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