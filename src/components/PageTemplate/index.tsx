import DateTime from '../../assets/icons/date-icon.svg'
import { Header } from "../Header";
import { Main } from "./style";
import { Link } from 'react-router-dom';
import { Button } from '../Button';

interface Props{
  title: string;
  hasNews: boolean;
  description: string;
  flatPath: string
  url?: string,
  news?: {
    id: number;
    title: string;
    wallpaper: string;
    time: string;
    content: string;
  }[]
  menuBackground?: string;
}

export function PageTemplate({title, description, news, flatPath,url, hasNews,menuBackground}:Props){
  console.log(menuBackground);
  
  return (
    <>
      <Header menuBackground={menuBackground}/>
      <Main menuBackground={menuBackground}>
        <img src={flatPath} alt={title} className='flat' />
        <h1 dangerouslySetInnerHTML={{ __html:title }} />
        <p className="description" dangerouslySetInnerHTML={{ __html:description }} />

        {hasNews &&(
          <section>
          <h2>Nossa História</h2>
          {news?.map(noticia => (
            <div className="news" key={noticia.id}>
              <Link to={`${url}/${noticia.id}`}>
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
        )}
      </Main>

      
  </>
  )
}