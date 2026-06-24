import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import NotFoundPage from './components/NotFound'
import TitusAIPage from './components/TitusAIPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/titusai' element={<TitusAIPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
