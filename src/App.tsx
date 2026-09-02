import './App.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {

  return (
  <>
  <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#" className="font-bold text-lg tracking-tight hover:text-teal-400 transition-colors">
        &lt;<span className="text-teal-400">Adrian</span> /&gt;
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <a href="#sobre-mi" className="hover:text-teal-400 transition-colors">Sobre mí</a>
        <a href="#proyectos" className="hover:text-teal-400 transition-colors">Proyectos</a>
        <a href="#contacto" className="hover:text-teal-400 transition-colors">Contacto</a>
      </nav>
      <a href="#contacto" className="px-4 py-2 text-xs font-semibold rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/30 hover:bg-teal-400/20 transition-all">
        Contactar
      </a>
    </div>
  </header>

  <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-32">

    <section className="flex flex-col items-start gap-6 max-w-3xl">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/20 text-xs font-medium">
        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
        Disponible para nuevos proyectos
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-50 leading-tight">
        Desarrollador Web especializado en <span className="text-teal-400">React</span> & <span className="text-teal-400">Node.js</span>.
      </h1>
      <p className="text-lg text-slate-400 leading-relaxed">
        Apasionado por crear aplicaciones escalables, accesibles y de alto rendimiento. Graduado en Desarrollo de Aplicaciones Web (DAW) enfocado en TypeScript y desarrollo Fullstack.
      </p>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a href="#proyectos" className="px-6 py-3 rounded-xl bg-teal-400 text-slate-950 font-semibold text-sm hover:bg-teal-300 transition-all shadow-lg shadow-teal-400/10">
          Ver Proyectos
        </a>
        <a href="https://github.com" target="_blank" className="p-3 rounded-xl border border-slate-800 bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors">
          <FaGithub/>
        </a>
        <a href="https://linkedin.com" target="_blank" className="p-3 rounded-xl border border-slate-800 bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors">
        <FaLinkedin/>
        </a>
      </div>
    </section>

    <section id="sobre-mi" className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
          Tecnologías & Herramientas
        </h2>
        <p className="text-slate-400 text-sm">Stack tecnológico principal para desarrollo web.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center gap-3 hover:border-teal-400/40 transition-colors">
          <span className="font-semibold text-sm text-slate-200">TypeScript</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center gap-3 hover:border-teal-400/40 transition-colors">
          <span className="font-semibold text-sm text-slate-200">React</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center gap-3 hover:border-teal-400/40 transition-colors">
          <span className="font-semibold text-sm text-slate-200">Next.js</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center gap-3 hover:border-teal-400/40 transition-colors">
          <span className="font-semibold text-sm text-slate-200">Node.js</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center gap-3 hover:border-teal-400/40 transition-colors">
          <span className="font-semibold text-sm text-slate-200">PostgreSQL</span>
        </div>
        <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center gap-3 hover:border-teal-400/40 transition-colors">
          <span className="font-semibold text-sm text-slate-200">Tailwind CSS</span>
        </div>
      </div>
    </section>

    <section id="proyectos" className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
          Proyectos Destacados
        </h2>
        <p className="text-slate-400 text-sm">Proyectos donde he aplicado mi conocimiento en React, APIs y base de datos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="p-6 rounded-2xl bg-slate-800/30 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-teal-400/10 text-teal-400">Fullstack App</span>
              <div className="flex items-center gap-3">
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors">App de Traducción con Historial</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Traductor interactivo con debounce en tiempo real, persistencia de favoritos en base de datos PostgreSQL y gestión de estado con Custom Hooks.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-6">
            <span className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 font-mono">React</span>
            <span className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 font-mono">TypeScript</span>
            <span className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 font-mono">Tailwind</span>
          </div>
        </article>

        <article className="p-6 rounded-2xl bg-slate-800/30 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-purple-400/10 text-purple-400">Dashboard</span>
              <div className="flex items-center gap-3">
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors">Dashboard de Control de Finanzas</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Panel interactivo para registro de ingresos/gastos con visualización de gráficas dinámicas y rutas protegidas con autenticación JWT.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-6">
            <span className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 font-mono">Next.js</span>
            <span className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 font-mono">Prisma</span>
            <span className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 font-mono">Zod</span>
          </div>
        </article>
      </div>
    </section>

    <section id="contacto" className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-800/60 to-slate-900 border border-slate-800 space-y-6">
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
    <p>&copy; 2026 Desarrollador Web. Construido con Tailwind CSS & React.</p>
  </footer>
  </>
    )
  }

  export default App