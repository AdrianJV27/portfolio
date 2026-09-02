import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Introduction() {
    return (
           <section className="flex flex-col items-start gap-6 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/20 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                Available for new projects
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-50 leading-tight">
                <span className="text-teal-400">Web developer</span> & <span className="text-teal-400">Marketer</span>.
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed">
                Passionate about creating new projects and taking on new challenges.
              </p>
        
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#proyectos" className="px-6 py-3 rounded-xl bg-teal-400 text-slate-950 font-semibold text-sm hover:bg-teal-300 transition-all shadow-lg shadow-teal-400/10">
                  Ver Proyectos
                </a>
                <a href="https://github.com/AdrianJV27" target="_blank" className="p-3 rounded-xl border border-slate-800 bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors">
                  <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/adrianjurvi/" target="_blank" className="p-3 rounded-xl border border-slate-800 bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors">
                  <FaLinkedin/>
                </a>
              </div>
            </section>
    )
}