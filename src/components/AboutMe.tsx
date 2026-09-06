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
            <section id="about-me" className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold  flex items-center gap-3">
          Technologies & tools
        </h2>
        <p className="text-sm">My tech stack</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {
        technologies.map( (tech) => {
        return (
        <div key={tech.id} className="p-4 rounded-xl  border  flex items-center gap-3  transition-colors">
            <span className=" font-semibold text-sm ">
                <span>
                    <tech.icon/> {tech.label}
                </span>
            </span>
        </div>)}
            )
        }

        {/* <div className="p-4 rounded-xl  border  flex items-center gap-3  transition-colors">
          <span className="font-semibold text-sm ">Next.js</span>
        </div>
        <div className="p-4 rounded-xl  border  flex items-center gap-3  transition-colors">
          <span className="font-semibold text-sm ">Node.js</span>
        </div>
        <div className="p-4 rounded-xl  border  flex items-center gap-3  transition-colors">
          <span className="font-semibold text-sm ">PostgreSQL</span>
        </div>
        <div className="p-4 rounded-xl  border  flex items-center gap-3  transition-colors">
          <span className="font-semibold text-sm ">Tailwind CSS</span>
        </div> */}
      </div>
    </section>
    )
}