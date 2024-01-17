import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { GlobalStyle } from "./styles/global"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"


export function App() {

  return(
    <>
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>
    <RouterProvider router={router}/>
    </ThemeProvider>
    </>
  )
}

