import './App.css'
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe';
import { Introduction } from './components/Introduction';
import { Contact } from './components/Contact';

function App() {

  return (
  <>
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#" className="font-bold text-lg tracking-tight transition-colors">
        &lt;<span className="">Adrian</span> /&gt;
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium ">
        <a href="#about-me" className="transition-colors">About me</a>
        <a href="#projects" className="transition-colors">Projects</a>
        <a href="#contact" className="transition-colors">Contact me</a>
      </nav>
      <a href="mailto:adrianjjvv@gmail.com" className="px-4 py-2 text-xs font-semibold rounded-full border transition-all">
        Contact
      </a>
    </div>
  </header>

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