import { Dispatch, SetStateAction } from "react";
import { StyledBurger } from "./style";
interface Props{
  open: boolean
  setOpen:  Dispatch<SetStateAction<boolean>>
}
export function Burguer({open, setOpen}:Props){
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}