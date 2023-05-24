import { Routes, Route } from 'react-router-dom'
import { PokemonProvider } from './context/pokemon_context'
import { PokemonList } from './pages/PokemonList'
import { LoadingProvider } from './context/loading_context'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'

function App() {
  return (
    <LoadingProvider>
      <PokemonProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/list" element={<PokemonList/>}/>
          </Routes>
        </Layout>
      </PokemonProvider>
    </LoadingProvider>
  )
}

export default App
