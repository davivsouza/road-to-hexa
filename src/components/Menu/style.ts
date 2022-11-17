import styled from 'styled-components';
interface Props {
  open: boolean
  menuBackground?: string
}
export const StyledMenu = styled.nav<Props>`
  display: ${({ open }) => open ? 'flex' : 'none'};
  flex-direction: column;
  align-items: flex-start;
  background: ${({ menuBackground }) => menuBackground != 'yellow' ? 'linear-gradient(88.59deg, #3CAC59 -66%, #32C457 98.8%)' : 'linear-gradient(90deg, #FFBF10 36.74%, #F5C542 104.46%), #FFFFFF;'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: display 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  @media (max-width: 576px) {
    width: 80%;
  }

  a {
    font-size: 15px;
    padding: 2rem 0;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;
    
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 8px;
   font-size: 20px;
   font-family:'Fredoka One' ;

    
  }
`;