interface ProjectProps {
  title: string;
  link: string
  description: string;
  category: string
}

export function Project({ title, link, description, category}: ProjectProps){
    return (<>
    <article className="p-6 rounded-2xl bg-slate-800/30 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-teal-400/10 text-teal-400">{category}</span>
              <div className="flex items-center gap-3">
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors"><a href={link}>{title}</a></h3>
            <p className="text-slate-400 text-sm leading-relaxed">
                {description}
            </p>
          </div>
          {/* <div className="flex flex-wrap gap-2 pt-6">
            <span className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 font-mono">React</span>
            <span className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 font-mono">TypeScript</span>
            <span className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 font-mono">Tailwind</span>
          </div> */}
        </article>
    </>)
}