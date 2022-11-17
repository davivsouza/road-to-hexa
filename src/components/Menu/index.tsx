import { Dispatch, SetStateAction } from "react";
import { StyledMenu } from "./style";
import HomeIcon from "../../assets/icons/home.svg"
import BrazilFlag from "../../assets/icons/brazil-flag.svg"
import HexaMap from "../../assets/icons/hexa-map.svg"
import SoccerBall from "../../assets/icons/soccer-ball.svg"
import { Link } from "react-router-dom";
interface Props {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  menuBackground?: string | undefined;

}
export function Menu({ open,  menuBackground}: Props) {
  return (
    <StyledMenu open={open} menuBackground={menuBackground}>
      <Link to="/">
        <span role="img"><img src={HomeIcon} alt="Home" /></span>
        Home
      </Link>
      <Link to="/nosso-brasil">
        <span role="img"><img src={BrazilFlag} alt="Nosso Brasil" /></span>
        Nosso Brasil
      </Link>
      <Link to="/nossa-historia">
        <span role="img"><img src={SoccerBall} alt="Nossa História" /></span>
        Nossa História
      </Link>
      <Link to="/road-to-hexa">
        <span role="img"><img src={HexaMap} alt="Road To Hexa" /></span>
        Road To Hexa
      </Link>
    </StyledMenu>
  )
}