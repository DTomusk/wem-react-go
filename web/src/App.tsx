import './App.css'
import MainTemplate from './components/templates/MainTemplate'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Signup from './components/pages/Signup'

function App() {
  return (
    <Routes>
      <Route element={<MainTemplate />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  )
}

export default App
