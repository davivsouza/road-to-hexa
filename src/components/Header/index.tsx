import { Link } from "react-router-dom";
import { Container } from "./style";
import BrazilLogo from "../../assets/brazil-logo.png"

import { Burguer } from "../Burguer";
import { useState } from "react";
import { Menu } from "../Menu";

interface Props{
  menuBackground?: string | undefined;
}

export function Header({menuBackground}:Props) {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Link to="/">
        <img src={BrazilLogo} alt="Brasil" />
      </Link>
      <div>
        <Burguer open={open} setOpen={setOpen}/>
        <Menu open={open} setOpen={setOpen} menuBackground={menuBackground}/>
      </div>
    </Container>
  )
}