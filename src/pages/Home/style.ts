import styled from "styled-components";
export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  
  padding: 20px 40px;
  background: ${({theme}) => `linear-gradient(90deg, ${theme.colors.primary} 36.74%, ${theme.colors.secundary} 104.46%), #FFFFFF;`} ;
  .buttons{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`


export const Main = styled.main`
  color:#fff ;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content:center ;

  .flat{
    margin: auto;
    display: block;
    width: 100%;
    max-width: 400px;
  }
  h1{
    font-family: 'Fredoka One';
    margin-top: 60px;
    span{
      color: ${({theme}) => theme.colors.green};
    }
  }

  .description{
    margin-top: 30px;
    font-family:'Sen' ;
    font-weight: 700;
    span{
      color: ${({theme}) => theme.colors.green} ;
      
    }
  }


`