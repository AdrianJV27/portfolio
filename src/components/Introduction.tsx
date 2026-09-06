import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Introduction() {
    return (
           <section className="flex flex-col items-start gap-6 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium">
                <span className="w-2 h-2 rounded-full animate-pulse"></span>
                Available for new projects
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                <span className="">Web developer</span> & <span className="">Marketer</span>
              </h1>
              <p className="text-lg leading-relaxed">
                Passionate about creating new projects and taking on new challenges
              </p>
        
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#proyectos" className="px-6 py-3 rounded-xl font-semibold text-sm  transition-all shadow-lg shadow-teal-400/10">
                  Look my projects!
                </a>
                <a href="https://github.com/AdrianJV27" target="_blank" className="p-3 rounded-xl border transition-colors">
                  <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/adrianjurvi/" target="_blank" className="p-3 rounded-xl border transition-colors">
                  <FaLinkedin/>
                </a>
              </div>
            </section>
    )
}