import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers'
import GlobalStyle from './GlobalStyle'
import Container from './Container'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />

      <Container>
        <ListaVagas />
      </Container>

    </>
  )
}

export default App
