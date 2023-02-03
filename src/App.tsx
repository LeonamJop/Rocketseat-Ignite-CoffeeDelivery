import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ChoiceProductContextPorvider } from './context/ChoiceProductContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ChoiceProductContextPorvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChoiceProductContextPorvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
