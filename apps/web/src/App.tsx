import { Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import ProgramSelection from './pages/ProgramSelection'

// Liam was here!!
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/programselection" element={<ProgramSelection />} />
    </Routes>
  )
}

export default App
