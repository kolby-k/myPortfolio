import React from 'react'

import { projects } from '../constants'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <section className='max-container'>
    <h1 className='head-text'>
        My <span className='green-gradient_text'>Projects</span>
    </h1>
    <div>
      <p className='mt-5 flex flex-col gap-3 text-slate-300'>
      My commitment to continuous learning and improvement is at the core of my philosophy. I view each project as an exciting journey, invariably filled with challenges and lessons, providing me with valuable opportunities for growth. I find that every project I undertake enriches my 'toolkit' as a developer, ultimately enabling me to navigate new, more difficult challenges in the future. Refining my skills through a range of projects is not just a method of learning for me; it’s a source of immense enjoyment. I love the process of transforming a rough idea into a feasible, real-world solution. 
    <br className='mt-4'/>
      Reflecting on my journey, I take pride in my clear progression and am excited to continue down this path, evolving my abilities as a Full Stack developer. You can browse some of my projects below.
    </p>
    </div>

    <div className='flex flex-wrap my-20 gap-16'>
      {projects.map((project) => (
        <div className='lg:w-[400px] w-full' key={project.name}>
          <div className='block-container w-12 h-12'>
            <div className={`btn-back rounded-xl ${project.theme}`} />
            <div className='btn-front rounded-xl flex justify-center items-center'>
              <img 
                src={project.iconUrl}
                alt="Project Icon"
                className='w-1/2 h-1/2 object-contain'
              />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold text-slate-300'>
                {project.name}
              </h4>
              <p className='mt-5 flex flex-col gap-3 text-slate-300'>
                {project.description}
              </p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold green-gradient_text'
                  >
                    Live Link
                  </Link>
                  <p className='arrow object-contain'>
                    ➡︎
                  </p>
                </div>
              </div>
          </div>
      ))}
    </div>

    <hr className='border-slate-200' />
        <CTA />
    </section>
  )
}

export default Projects