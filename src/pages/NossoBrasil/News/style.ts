import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  width: 100%;

  background: linear-gradient(88.59deg, #3CAC59 -66%, #32C457 98.8%);

  padding: 350px 40px 20px;
  position: relative;
  h1, p{
    font-family: 'Sen';
    color: #fff;
    margin-bottom: 8px;
  }

  .back{
    position:absolute ;
    top: 20px;
    left: 20px;
    z-index: 2;
  }
  .wallpaper{
    position:absolute ;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
  }

  .news-content{
    margin-top: 16px;
    p{
      font-family:'Sen' ;
      color: #fff;
      text-align: justify;
    }

    img{
      width:100% ;
      margin: 24px 0;
    }
  }
`