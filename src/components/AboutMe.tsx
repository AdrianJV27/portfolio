import type { IconType } from "react-icons";

import { BsJavascript, BsTypescript } from "react-icons/bs";
import { FaReact, FaStripeS } from "react-icons/fa";

export function AboutMe(){

    interface Tech{
        id: string,
        icon: IconType,
        label:string,
    }

    const technologies: Tech[] = [
        {
            id: '1',
            icon: FaReact,
            label: 'React'
        },
        {
            id: '2',
            icon: BsTypescript,
            label: 'TypeScript'
        },
        {
            id: '3',
            icon: BsJavascript,
            label: 'JavaScript'
        },
        {
            id: '4',
            icon: FaStripeS,
            label: 'Stripe'
        },

    ]

    return (
            <section id="sobre-mi" className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-3">
          Technologies & tools
        </h2>
        <p className="text-slate-400 text-sm">My tech stack</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {
        technologies.map( (tech) => {
        return (
        <div key={tech.id} className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center gap-3 hover:border-teal-400/40 transition-colors">
            <span className=" font-semibold text-sm text-slate-200">
                <span>
                    <tech.icon/> {tech.label}
                </span>
            </span>
        </div>)}
            )
        }

        {/* <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800/80 flex items-center gap-3 hover:border-teal-400/40 transition-colors">
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
        </div> */}
      </div>
    </section>
    )
}