import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  

  background: linear-gradient(88.59deg, #3CAC59 -66%, #32C457 98.8%);

  padding: 350px 40px 20px;

  @media (min-width: 640px) {
    padding: 120px 40px 20px;
    }
  position: relative;
  h1, p{
    font-family: 'Sen';
    color: #fff;
    margin-bottom: 8px;

    @media (min-width: 1024px) {
      max-width: 500px;
      margin: auto;
    }
  }

  
  .back{
    position:absolute ;
    top: 20px;
    left: 20px;
    z-index: 2;

    @media (min-width: 1024px) {
      top: 90px;
      left: 120px;
    }
  }
  .wallpaper{
    position: absolute ;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    z-index: 1;

    @media (min-width: 640px) {
      display: none;
    }
  }

  .news-content{
    display:flex ;
    flex-direction: column;
    align-items: center;
   
    margin-top: 16px;
    p, strong{
      font-family:'Sen' ;
      color: #fff;
      text-align: justify;
    }

    img{
      width:100% ;
      margin: 24px 0;
      border-radius: 15px;

      @media (min-width: 1024px) {
        width: 40%;
        margin: 25px auto;
      }
    }
  }
`