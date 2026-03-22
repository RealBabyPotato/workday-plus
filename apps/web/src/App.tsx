import { Routes, Route } from 'react-router-dom'

import {TestPage} from './pages/TestPage'
import { HomePage } from './pages/HomePage'
import ProgramSelection from './pages/ProgramSelection'

// Liam was here!!
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/programselection" element={<ProgramSelection />} />
      <Route path="/testpage" element={<TestPage />} />
    </Routes>
  )
}

export default App
