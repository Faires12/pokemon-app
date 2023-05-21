import { Routes, Route } from 'react-router-dom'
import { PokemonProvider } from './context/pokemon_context'
import { PokemonList } from './pages/PokemonList'

function App() {
  return (
    <PokemonProvider>
      <Routes>
        <Route path="/list" element={<PokemonList/>}/>
      </Routes>
    </PokemonProvider>
  )
}

export default App
