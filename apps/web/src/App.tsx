import { Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import ProgramSelection from './pages/GraduationPlanner'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/GraduationPlanner" element={<ProgramSelection />} />
    </Routes>
  )
}

export default App
