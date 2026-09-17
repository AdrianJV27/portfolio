import { ThemeButton } from "./ThemeButton";

export function Header(){
    return  (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-lg tracking-tight transition-colors">
            &lt;<span className="text-primary">Adrian</span> /&gt;
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium ">
            <a href="#about-me" className="transition-colors">About me</a>
            <a href="#projects" className="transition-colors">Projects</a>
            <a href="#contact" className="transition-colors">Contact me</a>
          </nav>
          <div className="flex gap-2">
            <ThemeButton/>
            <div className="flex flex-wrap items-center gap-4">
              <a href="mailto:adrianjjvv@gmail.com" className="border hover:bg-primary hover:text-main-bg inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all">
                Contact me
              </a>
            </div>
          </div>
        </div>
      </header>
      )
}