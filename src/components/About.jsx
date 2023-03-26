import React from 'react'
import Tilt from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../style';
import {services} from '../constants';
import { textVariant,fadeIn } from './../utils/motion';
import {visit} from '../assets';
import { SectionWrapper } from '../hoc';


const ServiceCard =({index,title,icon,link})=>{
  return (
    <Tilt className="xs:w-[250px] w-full " >
      <motion.div variants={fadeIn("right","spring",0.5 * index ,0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div options={{max:45 , sclae:1,speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className="w-16 h-16 object-contain "></img>
          <h3 className='text-white text-[20px] font-bold text-center '>{title}</h3>
          <a href={link}> < img src={visit} className = "w-8 h-8 bg-cyan-100 " /> </a>
      </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} >Introduction </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I am a third year B.Tech student, I have developed a strong foundation in computer science and engineering concepts, with a focus on programming and problem-solving skills. I have completed various academic projects that have helped me gain a deeper understanding of different technologies and programming languages like C and C++. Additionally, I have honed my technical skills in data structures and algorithms and  web development through various projects and internships.  I am excited to continue building my skills and contributing to the field of computer science and engineering.
      </motion.p>
      
      <div className='mt-20 flex flex-wrap gap-40 '>
          {services.map((service,index)=>(
            <ServiceCard key={service.title} index={index} {...service}/>
          ))}
      </div>
    </>
    )
}

export default SectionWrapper(About,"about")