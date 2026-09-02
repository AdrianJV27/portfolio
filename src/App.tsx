import './App.css'
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe';
import { Introduction } from './components/Introduction';

function App() {

  return (
  <>
  <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#" className="font-bold text-lg tracking-tight hover:text-teal-400 transition-colors">
        &lt;<span className="text-teal-400">Adrian</span> /&gt;
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <a href="#sobre-mi" className="hover:text-teal-400 transition-colors">About me</a>
        <a href="#proyectos" className="hover:text-teal-400 transition-colors">Projects</a>
        <a href="#contacto" className="hover:text-teal-400 transition-colors">Contact me</a>
      </nav>
      <a href="#contacto" className="px-4 py-2 text-xs font-semibold rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/30 hover:bg-teal-400/20 transition-all">
        Contactar
      </a>
    </div>
  </header>

  <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-32">

 
    <Introduction/>
    <AboutMe/>
    <Projects/>

    <section id="contacto" className="p-8 md:p-12 rounded-3xl bg-linear-to-br from-slate-800/60 to-slate-900 border border-slate-800 space-y-6">
      <div className="max-w-xl space-y-3">
        <h2 className="text-3xl font-bold text-slate-100">¿Hablamos?</h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          Estoy disponible para incorporarme a un equipo como desarrollador web o afrontar nuevos retos en proyectos Fullstack.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <a href="mailto:tu-email@ejemplo.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-400 text-slate-950 font-semibold text-sm hover:bg-teal-300 transition-all">
          Enviar Email
        </a>
      </div>
    </section>

  </main>

  <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
    <p>&copy; 2026 Adrian's Portfolio. Builded with Tailwind CSS & React.</p>
  </footer>
  </>
    )
  }

  export default App