import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/Header.jsx'
import Empresa from './pages/Empresa/Empresa.jsx'
import Empresas from './pages/Empresas/Empresas.jsx'
import Login from './pages/Login/Login'
import Noticias from './pages/Noticias/Noticias'
import Task from './pages/Task/Task'

function App() {

  return (
    <div className='App'>
      <Router>
        <Header />

        <Routes>
          {/* localhost:port/empresa */}
          <Route path='/' exact element={<Home />} />
          <Route path='login' exact element={<Login />} />
          <Route path='noticias' element={<Noticias />} />
          <Route path='empresas' element={<Empresas />} />
          <Route path='empresa/:empresa' element={<Empresa />} />

          {/* EXERCÍCIOS */}
          <Route path='semana-06' element={<Task />} />

          {/* localhost:5137/empresas/NOME_EMPRESA */}
          {/* localhost:5137/empresas/audaces */}
          {/* const empresa = 'audaces'  */}
          {/* <Route path='empresas/:empresa' exact element={<Empresas />} /> */}

        </Routes>
      </Router>
    </div>
  )
}

export default App
{/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
