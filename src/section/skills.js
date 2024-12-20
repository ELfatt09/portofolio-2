import React from 'react';

const skillList = {
    backend: [
        {
            name: 'PHP',
            level: 'Advanced',
            framework: ['Laravel'],
            skillSet: ['CRUD with Mysql', 'Authentication and Authorization', 'Input Sanitation', 'RESTful API Development', 'Code Optimation']
        },
        {
            name: 'Python',
            level: 'beginner',
            framework: [],
            skillSet: ['Data Analysis', 'Machine Learning Basics']
        },
        {
            name: 'Javascript (Node JS)',
            level: 'Intermediate',
            framework: [],
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
            framework: [],
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
    return (
        <section className='bg-gray-800 min-h-screen w-full'>
            <div className='flex flex-col items-center text-center mt-20 mb-5'>
                <h1 className='hover:text-4xl font-serif uppercase text-3xl font-bold text-gray-200 mb-5'>Backend Skills</h1>
                <hr className=' w-1/2 mx-auto mb-5 border-2 rounded-md border-emerald-600'></hr>
            </div>
            <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-screen-lg mx-auto gap-10 mt-16 px-5">
                {skillList.backend.map((skill) => (

                    <div className='flex-col py-5 px-3 transition duration-300 hover:bg-gray-900 bg-gray-800 p-2 rounded-md text-gray-200 font-bold mb-5 hover:border-b-4 hover:border-e-4 border-spacing-2 border-emerald-600 '>
                        <h2 className=' mb-3 rounded-md text-gray-200  text-xl text-center font-semibold '>
                            <img className='inline-block w-auto h-20 mb-5' src={`/assets/${skill.name.toLowerCase()}.svg`} alt={skill.name} />
                            <br></br>
                            {skill.name}
                        </h2>
                        <hr className='mb-5 border-2 rounded-md border-emerald-600'></hr>
                        <div class="group transition duration-300 flex gap-4 items-start flex-col border border-emerald-500 p-6 rounded-xl bg-gray-800 shadow-lg hover:bg-emerald-600 hover:shadow-emerald-400">
                            <span class="text-emerald-500 transition duration-300 bg-emerald-400/10 p-3 rounded-full group-hover:bg-gray-100">
                                {skill.framework.map((framework) => (
                                    <span class="mr-2">
                                        <img className='inline-block w-auto h-10' src={`/assets/${framework.toLowerCase()}.svg`} alt={framework} />
                                    </span>
                                ))}
                            </span>

                            <div>
                                <h3 class="font-serif transition duration-300 font-bold text-lg p-3 rounded-md bg-emerald-500 text-gray-100 group-hover:text-emerald-500 group-hover:bg-gray-900">{skill.level}</h3>
                            </div>

                            <ul class="list-disc pl-10">
                                {skill.skillSet.map((skillSet) => (
                                    <li class="text-gray-200 text-lg">{skillSet}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col items-center text-center mt-20 mb-5'>
                <h1 className='transition duration-300 hover:text-emerald-600 hover:tracking-widest font-serif uppercase text-3xl font-bold text-gray-200 mb-5'>frontend Skills</h1>
                <hr className=' w-1/2 mx-auto mb-5 border-2 rounded-md border-emerald-600'></hr>
            </div>
            <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-screen-lg mx-auto gap-10 mt-16 px-5">
                {skillList.frontend.map((skill) => (

                    <div className='flex-col py-5 px-3 transition duration-300 hover:bg-gray-900 bg-gray-800 p-2 rounded-md text-gray-200 font-bold mb-5 hover:border-b-4 hover:border-e-4 border-spacing-2 border-emerald-600 '>
                        <h2 className=' mb-3 rounded-md text-gray-200  text-xl text-center font-semibold '>
                            <img className='inline-block w-auto h-20 mb-5' src={`/assets/${skill.name.toLowerCase()}.svg`} alt={skill.name} />
                            <br></br>
                            {skill.name}
                        </h2>
                        <hr className='mb-5 border-2 rounded-md border-emerald-600'></hr>
                        <div class="group transition duration-300 flex gap-4 items-start flex-col border border-emerald-500 p-6 rounded-xl bg-gray-800 shadow-lg hover:bg-emerald-600 hover:shadow-emerald-400">
                            <span class="text-emerald-500 transition duration-300 bg-emerald-400/10 p-3 rounded-full group-hover:bg-gray-100">
                                {skill.framework.map((framework) => (
                                    <span class="mr-2">
                                        <img className='inline-block w-auto h-10' src={`/assets/${framework.toLowerCase()}.svg`} alt={framework} />
                                    </span>
                                ))}
                            </span>

                            <div>
                                <h3 class="font-serif transition duration-300 font-bold text-lg p-3 rounded-md bg-emerald-500 text-gray-100 group-hover:text-emerald-500 group-hover:bg-gray-900">{skill.level}</h3>
                            </div>

                            <ul class="list-disc pl-10">
                                {skill.skillSet.map((skillSet) => (
                                    <li class="text-gray-200 text-lg">{skillSet}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Skills;

