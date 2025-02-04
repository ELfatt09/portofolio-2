import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const skills = {
    backend: [
        {
            name: 'PHP',
            level: 'Advanced',
            framework: ['Laravel'],
            skillSet: ['CRUD with Mysql', 'Authentication and Authorization', 'Input Sanitation', 'RESTful API Development', 'Code Optimation']
        },
        {
            name: 'Python',
            level: 'Beginner',
            framework: null,
            skillSet: ['Data Analysis', 'Machine Learning Basics']
        },
        {
            name: 'Javascript (Node JS)',
            level: 'Intermediate',
            framework: null,
            skillSet: ['API Development with Express', 'Input Sanitation', 'Code Optimation']
        },
        {
            name: 'Golang',
            level: 'Beginner',
            framework: ['gin', 'GORM'],
            skillSet: ['CRUD with Mysql', 'Backend API for Web Development', 'Concurrency Basics']
        },
    ],
    frontend: [
        {
            name: 'HTML',
            level: 'Advanced',
            framework: null,
            skillSet: ['Semantic HTML', 'Responsive Design'],
        },
        {
            name: 'CSS',
            level: 'Advanced',
            framework: ['Tailwind CSS', 'Bootstrap'],
            skillSet: ['CSS Grid', 'CSS Flexbox', 'Responsive Design', 'Semantic CSS Classname', 'Dark Mode']
        },
        {
            name: 'Javascript',
            level: 'Advanced',
            framework: ['React', 'Alpine JS'],
            skillSet: ['DOM Manipulation', 'Event Handling', 'Asynchronous Programming']
        },
    ],
};

function Skills() {
    const { scrollYProgress } = useScroll();
    const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            id='skills'
            className='bg-gray-800 h-auto w-full z-10 snap-always snap-center px-3 py-10 md:py-20'>
            <div className='flex flex-col md:flex-row h-fit md:h-screen gap-10 md:gap-20 items-center'>
                <div className='flex items-center h-full md:h-fit md:w-1/2 p-10 overflow-y-auto'>
                    <div className='flex flex-col mx-auto w-full md:max-w-md'>
                        <h1 className='font-serif text-5xl font-bold text-gray-300'>
                            What Can I Do?
                        </h1>
                        <hr className='border-emerald-600 border-2 my-2 w-1/2 mx-auto' />
                        <p className='text-gray-400'>
                            I am a full stack web developer with experience in developing web application using Laravel as the backend and React as the frontend. I am also familiar with Golang and Python as a programming language. I have a strong understanding of web development principles, including RESTful API, input sanitation, and code optimization. I am eager to learn more and expand my skillset.
                        </p>
                    </div>
                </div>
                <div className='snap snap-mandatory snap-y h-3/4 overflow-y-auto overflow-x-hidden whitespace-nowrap w-full  lg:w-1/2 [&::-webkit-scrollbar]:w-1 hover:[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-700 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-700 [&::-webkit-scrollbar-thumb]:rounded-full  pr-2 filter backdrop-blur-md'>
                    {Object.keys(skills).map((category) => (
                        skills[category].map((skill) => (
                            <SkillCard
                                key={skill.name}
                                skill={skill}
                                scrollProgress={scrollProgress}
                            />
                        ))
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

function SkillCard({ skill, scrollProgress }) {
    const { name, level, framework, skillSet } = skill;

    return (
        <motion.div
            initial={{ scale: 0.6, opacity: 0.4 }}
            whileInView={{ scale: 0.85, opacity: 0.7 }}
            whileHover={{ scale: 0.9, opacity: 1, transition: { duration: 0.5, type: 'spring', delay: 0 } }}
            transition={{ duration: 0.7, type: 'tween', delay: 1 }}
            className='min-h-[35vh] snap-always snap-center w-full rounded-2xl  shadow-none hover:shadow-lg hover:shadow-emerald-500 my-10 md:my-40 border-none '>
            <div className='w-5 bg-emerald-600 rounded-l-2xl' />
            <div className='flex flex-col md:flex-row w-full p-5'>
                <div className='mx-auto w-1/3 md:border-r border-gray-500 flex items-center justify-center p-5'>
                    <img src={`./assets/${name}.svg`} alt={name} className='w-full h-auto' />
                </div>
                <div className='w-full px-5 py-10'>
                    <h2 className='text-2xl font-bold text-emerald-600 uppercase'>{name}</h2>
                    <p className='text-gray-300 mb-2 border-b-2 border-emerald-600 w-fit px-3'>{level}</p>
                    <div className='flex flex-row justify-center'>
                        {framework != null && (
                            <div className='w-1/2 pr-5'>
                                <h3 className='text-emerald-600 mb-2'>Frameworks</h3>
                                {framework.map((framework) => (
                                    <div className='flex flex-wrap border w-fit px-2 my-2 rounded-full border-emerald-600 items-center shadow-none hover:shadow-md shadow-emerald-500'>
                                        <img src={`./assets/${framework}.svg`} className='w-auto h-5 mr-1' alt={framework} />
                                        <p className='text-emerald-600 flex justify-start'>{framework}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className='w-1/2 pl-5'>
                            <h3 className='text-emerald-600 mb-2'>Skill Set</h3>
                            {skillSet.map((skill) => (
                                <p className='text-gray-200 flex justify-start'>{skill}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Skills;
