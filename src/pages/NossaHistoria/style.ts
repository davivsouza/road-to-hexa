import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  background: linear-gradient(88.59deg, #3CAC59 -66%, #32C457 98.8%);

  padding: 20px 40px;
`;

export const Main = styled.main`
  color:#fff ;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content:center ;

  .flat{
   display: block;
    margin: auto;
    width: 100%;
    max-width: 400px;
  }

  h1{
    font-family: 'Fredoka One';
    margin-top: 60px;
    span{
      color: #FFDD1E;
    }
    text-align: center;
  }

  .description{
    margin-top: 30px;
    font-family:'Sen' ;
    font-weight: 700;
    text-align: center;
    span{
      color: #FFDD1E ;
      
    }
  }

 


  section {
    margin-top: 30px;
    h2{
      font-family: 'Fredoka One';
    }

    .news{
      display: flex;
      align-items: center;
      gap: 20px;
      margin-top: 20px;
      a{
        display: flex;
        align-items: flex-start;
        gap: 8px;
        text-decoration: none;
        color: #fff;
      }
      img{
        width: 70px;
        height: 70px;
        border-radius:15px ;
      }
      .news-title{
        font-family: 'Sen';
        font-weight: 700;
      }

      .news-date{
        font-size: 13px;
        display:flex ;
        align-items:center ;
        gap: 4px;
        height: 40px;
        img{
          width: 20px;
        }
      }
    }
  }

`