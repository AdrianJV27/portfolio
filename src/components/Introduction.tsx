import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CurrentTime } from "./CurrentTime";
import { IoLocationOutline } from "react-icons/io5";

export function Introduction() {
    return (
          <div className="flex flex-col md:flex-row gap-5">
          <aside className="flex flex-col gap-2 border rounded-2xl border-text-color p-2 items-center text-center align-middle">
            <img src="img/profile.webp" 
            alt=""
            className=" w-32 h-32 rounded-2xl object-cover object-[center_40%] border border-border-main" />

            <h2 className="font-extrabold tracking-tight leading-tight">
              Adrián Jurado Villegas
            </h2>
            <div className="flex md:flex-col items-center md:gap-0.5 gap-5 ">
              <p className="text-secondary"><CurrentTime/></p>
              <p className="text-secondary"><span className="flex items-center"><IoLocationOutline/> Australia/GoldCoast</span></p>
            </div>
          </aside>
           <section className="flex flex-col items-start gap-6 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/20 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Available for new projects
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                <span className="text-primary">Web developer</span> & <span className="text-primary">Marketer</span>
              </h1>
              <p className="text-lg leading-relaxed">
                Passionate about creating new projects and taking on new challenges
              </p>
        
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#proyectos" className="border-primary hover:text-main-bg hover:bg-primary border-2 px-6 py-3 rounded-xl font-semibold text-sm  transition-all shadow-lg shadow-teal-400/10">
                  Look my projects!
                </a>
                <a href="https://github.com/AdrianJV27" target="_blank" className="hover:animate-pulse hover:text-main-bg hover:bg-primary p-3 rounded-xl border transition-colors">
                  <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/adrianjurvi/" target="_blank" className="hover:animate-pulse hover:text-main-bg hover:bg-primary p-3 rounded-xl border transition-colors">
                  <FaLinkedin/>
                </a>
              </div>
            </section>
          </div>

    )
}