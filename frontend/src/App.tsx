import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import NotFoundPage from './components/NotFound'
import TitusAIPage from './components/TitusAIPage'
import AiModelsPage from './ai_models/model_main'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/titusai' element={<TitusAIPage />} />
      <Route path='/interesting-models' element={<AiModelsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
