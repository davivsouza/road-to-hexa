import {  useParams } from 'react-router-dom'
import { NewsTemplate } from '../../../components/News'
import news from '../../../utils/news.json'

export function HexaNews(){

  const {id} = useParams()
  
  return (
    <NewsTemplate id={id} news={news.roadToHexa} url="/road-to-hexa" />
  )
}