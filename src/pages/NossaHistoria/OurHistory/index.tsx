
import news from '../../../utils/news.json'
import {  useParams } from 'react-router-dom'
import { NewsTemplate } from '../../../components/News'

export function OurHistory(){

  const {id} = useParams()
  
  return (
    <NewsTemplate id={id} news={news.nossaHistoria} url="/nossa-historia" />
  )
    
}