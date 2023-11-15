import { Route, BrowserRouter as Router, Routes }  from 'react-router-dom';
import { Home, Contact, About, Projects } from './pages';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <main className='bg-zinc-900'>
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    </main>
  )
}

export default App