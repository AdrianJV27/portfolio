import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectProps {
  title: string;
  link: string
  description: string;
  category: string
}

export function Project({ title, link, description, category}: ProjectProps){
    return (<>
    <article className="p-6 rounded-2xl border flex flex-col justify-between transition-all group hover:text-primary">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md">{category}</span>
              <div className="flex items-center gap-3">
              </div>
            </div>
            <h3 className="text-xl font-bold transition-colors"><a target='_blank' className="flex gap-2" href={link}>{title}<FaExternalLinkAlt/></a></h3>
            <p className="text-sm leading-relaxed">
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