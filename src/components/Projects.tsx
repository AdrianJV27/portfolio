import { useState } from "react";
import { CATEGORIES, CATEGORY_TABS, projectList } from "../constants";
import type { Category } from "../types";
import { getCategoryLabel } from "../helpers";
import { Project } from "./Project";

export function Projects(){
    const [currentActiveCategory, setCurrentActiveCategory] = useState<Category>(CATEGORIES.ALL)
    const filteredProjects = projectList.filter( ({category}) => category === currentActiveCategory || currentActiveCategory === CATEGORIES.ALL)
    
    return (
    <section id="projects" className="space-y-8">
        <div className="space-y-2">
            <h2 className="text-2xl font-bold flex items-center gap-3">
                Projects
            </h2>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium ">
                {
                    CATEGORY_TABS.map( (category) => {
                        const isActive = currentActiveCategory === category.id
                        return (
                            <button 
                                key={category.id} 
                                onClick={ () => setCurrentActiveCategory(category.id)}
                                className={`hover:text-primary transition-colors cursor-pointer  ${ isActive && 'text-primary border-b-2 border-primary'}`}>
                                    {category.label}
                                </button>
                        )
                    })
                }
            </nav>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {
            filteredProjects.map( (project) => {

                return (<Project
                    key={project.id}
                    title={project.title}
                    link={project.link}
                    description={project.description}
                    category={getCategoryLabel(project.category)}

                />)
            })
        }
      </div>
    </section>
    )
}