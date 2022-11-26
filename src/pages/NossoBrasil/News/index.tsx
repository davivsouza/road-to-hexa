
import {  useParams } from 'react-router-dom'
import { NewsTemplate } from '../../../components/News'
import news from '../../../utils/news.json'

export function News(){

  const {id} = useParams()
  
  return (
    <NewsTemplate id={id} news={news.nossoBrasil} url="/nosso-brasil" />
  )
}