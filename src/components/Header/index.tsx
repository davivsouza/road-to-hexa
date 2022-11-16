import { Link } from "react-router-dom";
import { Container } from "./style";
import BrazilLogo from "../../assets/brazil-logo.png"

import { Burguer } from "../Burguer";
import { useState } from "react";
import { Menu } from "../Menu";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Link to="/">
        <img src={BrazilLogo} alt="Brasil" />
      </Link>
      <div>
        <Burguer open={open} setOpen={setOpen}/>
        <Menu open={open} setOpen={setOpen} />
      </div>
    </Container>
  )
}