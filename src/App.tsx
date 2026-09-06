import './App.css'
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe';
import { Introduction } from './components/Introduction';
import { Contact } from './components/Contact';
import { Header } from './components/Header';

function App() {
  return (
  <>
  <Header/>
  <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-32">
    <Introduction/>
    <AboutMe/>
    <Projects/>
    <Contact/>
  </main>

  <footer className="border-t py-8 text-center text-xs">
    <p>&copy; 2026 Adrian's Portfolio. Builded with Tailwind CSS & React.</p>
  </footer>
  </>
    )
  }

  export default App