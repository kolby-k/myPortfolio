import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import CTA from '../components/CTA';
import { skills, experiences } from '../constants/index';

const About = () => {
  return (
    <section className='max-container'>
        <h1 className='head-text'>
            Hello, I'm <span className='green-gradient_text'>Kolby</span>
        </h1>

        <div className='mt-5 flex flex-col gap-3 text-slate-300'>
            <p>
                As a Full Stack Developer, I am driven by a deep curiosity for innovation and a passion for solving complex challenges. My expertise spans both front-end and back-end development, equipping me with a versatile skill set.
            </p>
            <p>
                I take pride in implementing original ideas, building efficient applications, and designing user-friendly websites. My goal is to create digital solutions that function flawlessly and push the boundaries of what is possible in our modern digital world.
             </p>
        </div>

        <div className='py-10 flex justify-center flex-col'>
            <h3 className='subhead-text'>
                My Skills:
            </h3>
            <div className='mt-16 flex justify-center flex-wrap gap-12'>
            {skills.map((skill) => (
                <div key={skill.name} className='block-container w-20 h-20'>
                    <div className={`btn-back rounded-xl`}/>
                    <div className='btn-front-tooltip rounded-xl flex justify-center items-center'>
                    <img 
                        src={skill.imageUrl}
                        alt={skill.name}
                        className="w-1/2 h-1/2"
                    />
                    <div className='tooltip'>
                        <h4 className='text-md'>{skill.name}</h4>
                        <p id="tooltip-type" className='italic'>{skill.type}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>

        <div className='py-16'>
            <h3 className='subhead-text'>Work Experience</h3>
            <div className='mt-5 flex flex-col gap-3 text-slate-300'>
            <p>
            I have been fortunate to gain valuable experience in web development through my current role at Business Link. 
            </p>
            <p>Additionally, a significant part of my expertise comes from my interest in technology and self-learning. This includes building my own websites, ranging from simple blogs to more complex e-commerce shops, and seeking educational opportunities like the <a style={{color: 'lightblue'}} target='_blank' href='https://www.codecademy.com/learn/paths/full-stack-engineer-career-path'>Full Stack Developer career path</a> on Codecademy, which I recently completed.
            </p>
            <p>
            The combination of professional exposure and self-driven learning is an asset that not only demonstrates my commitment to learning, but also equips me with the diverse experience necessary to be truly effective.
            </p>
        </div>

        <div className='mt-12 flex'>
            <VerticalTimeline>
                {experiences.map((experience) => (
                    <VerticalTimelineElement
                        key={experience.company_name}
                        date={<span className='date-text px-2'>{experience.date}</span>}
                        icon={<div className='flex justify-center items-center w-full h-full'>
                            <img 
                            src={experience.icon}
                            alt={`${experience.company_name} Logo`}
                            className='w-[60%] h-[60%] object-contain'
                        />
                        </div>}
                        contentStyle={{
                            borderBottom: '8px',
                            borderStyle: 'solid',
                            borderBottomColor: experience.iconBg,
                            boxShadow: 'none'
                        }}
                        iconStyle={{ background: experience.iconBg }}
                        >
                        <div>
                            <h3 className='text-black text-xl font-poppins font-semibold'>
                                {experience.title}
                            </h3>
                            <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                                {experience.company_name}
                            </p>
                        </div>
                        <ul className='my-3 list-disc ml-5 space-y-2'>
                            {experience.points.map((point, index) => (
                                <li 
                                    key={`experience-point-${index}`} 
                                    className='text-slate-600 py-3 text-sm font-normal pl-1 '
                                    dangerouslySetInnerHTML={{ __html: point }}
                                >
                                </li>
                            ))}
                        </ul>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
        </div>

        <hr className='border-slate-200' />
        <CTA />
    </section>
  )
}

export default About