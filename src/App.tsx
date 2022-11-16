import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Home } from "./pages/Home"
import { News } from "./pages/NossoBrasil/News"
import { NossaHistoria } from "./pages/NossaHistoria"
import { NossoBrasil } from "./pages/NossoBrasil"
import { OurHistory } from "./pages/NossaHistoria/OurHistory"
import { theme } from "./styles/themes/theme"
import { Header } from "./components/Header"
import { RoadToHexa } from "./pages/RoadToHexa"
function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<NossoBrasil/>} path="/nosso-brasil"/>
        <Route element={<NossaHistoria/>} path="/nossa-historia"/>
        <Route element={<RoadToHexa/>} path="/road-to-hexa"/>
        <Route element={<OurHistory/>} path="/nossa-historia/:id"/>
        <Route element={<News/>} path="/nosso-brasil/:id"/>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
   
  )
}

export default App
