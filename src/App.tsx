import { useState } from 'react'
import { PokemonProvider } from './context/pokemon_context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PokemonProvider>
      oi
    </PokemonProvider>
  )
}

export default App
