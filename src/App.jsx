import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import ChatPage from './pages/Chat/Chat'
import HomePage from './pages/Home/Homepage'
import NotFound from './pages/NotFound'


function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="*" element={<NotFound />} />

      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App

