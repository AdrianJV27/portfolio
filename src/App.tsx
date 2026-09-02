import './App.css'
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe';
import { Introduction } from './components/Introduction';
import { Contact } from './components/Contact';

function App() {

  return (
  <>
  <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#" className="font-bold text-lg tracking-tight hover:text-teal-400 transition-colors">
        &lt;<span className="text-teal-400">Adrian</span> /&gt;
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <a href="#about-me" className="hover:text-teal-400 transition-colors">About me</a>
        <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-teal-400 transition-colors">Contact me</a>
      </nav>
      <a href="mailto:adrianjjvv@gmail.com" className="px-4 py-2 text-xs font-semibold rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/30 hover:bg-teal-400/20 transition-all">
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

  <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
    <p>&copy; 2026 Adrian's Portfolio. Builded with Tailwind CSS & React.</p>
  </footer>
  </>
    )
  }

  export default App