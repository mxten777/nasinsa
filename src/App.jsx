import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Phase 4: 관리자 페이지 추가 예정 */}
        {/* <Route path="/admin" element={<AdminPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
