import React from 'react';
import SkillsItem from './SkillsItem';
import SkillsLanguage from './SkillsLanguage';

const Skills = () => {
    const descriptionWeb = 'I embarked on a transformative journey through HTML, CSS, Bootstrap, Tailwind, JavaScript, React, Node.js, Express, MongoDB, and more.Beginning with the basics, I mastered HTML/CSS for structuring and styling web pages, then advanced to JavaScript for dynamic interactivity. React empowered me to build modern, scalable applications, while Node.js and Express taught me server-side development.Hands-on projects, including e-commerce platforms and data visualization dashboards, solidified my skills.'

    const descriptionPhitron = 'The journey mastering fundamental concepts such as programming, data structures, algorithms, OOP, databases, and problem-solving. By immersing oneself in comprehensive learning resources, hands-on practice, and real-world projects, one can develop the skills and expertise needed to excel in the dynamic field of software development. Through dedication, perseverance, and a passion for continuous learning, aspiring programmers can transform into exceptional professionals capable of tackling complex challenges and making a meaningful impact in the world of technology.'
    return (
        <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
            <h1 className='heading'>Education & <span className='text-yellow-400'>skill</span>
            </h1>
            <div className='w-[80%] mx-auto pt-[4rem] md:pt-[4rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
                <div>
                    <SkillsItem title="Complete Web Development" year="2020 - 2021" des={descriptionWeb}/>
                    {/* <SkillsItem title="Mern Stack Developer" year="2016 - 2020"/> */}
                    <SkillsLanguage skill1='html' skill2='css' skill3='javascript' skill4='Firebase' skill5='MongoDB' 
                    skill6='Mongoose'  level1='w-[91%]' level2='w-[88%]' level3='w-[80%]' level4='w-[70%]' level5='w-[85%]' level6='w-[90%]' />
                </div>

                <div>
                    <SkillsItem title="CSE Fundamentals with Phitron" year="2022 - 2023" des={descriptionPhitron}/>
                    {/* <SkillsItem title="Node js Developer" year="2021 - 2023"/> */}
                    <SkillsLanguage skill1='React js' skill2='Express js' skill3='Next JS'
                    skill4='Typescirpt' skill5='Django' skill6='MySQl' level1='w-[81%]' level2='w-[78%]' level3='w-[85%]' level4='w-[70%]' level5='w-[60%]' level6='w-[95%]'/>
                </div>


            </div>
        </div>
    );
};

export default Skills;