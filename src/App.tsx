import { GlobalStyle } from "./styles/global"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import RoutesApp from "./routes"



export function App() {

  return(
    <>
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>
    <RoutesApp/>
    </ThemeProvider>
    </>
  )
}

