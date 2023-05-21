import { Routes, Route } from 'react-router-dom'
import { PokemonProvider } from './context/pokemon_context'
import { PokemonList } from './pages/PokemonList'
import { LoadingProvider } from './context/loading_context'

function App() {
  return (
    <LoadingProvider>
      <PokemonProvider>
        <Routes>
          <Route path="/list" element={<PokemonList/>}/>
        </Routes>
      </PokemonProvider>
    </LoadingProvider>
  )
}

export default App
