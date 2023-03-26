import {motion} from 'framer-motion';
import {styles} from '../style';
import {ComputersCanvas} from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto '>
      <div className={`${styles.paddingX} inset-0 top-[80px] max-w-7xl pt-20 h-2/4 mx-auto flex flex-row items-start gap-5 `}>
          <div className='flex flex-col justify-center items-center mt-1 '>
            <div className='w-5 h-5 rounded-full bg-[#915eff] mt-3'/>
            <div className='w-1 sm:h-80 h-20 violet-gradient ' ></div>
          </div>

          <div>
            <h1 className={`text-5xl font-extrabold text-white mt-4 `}>Hi, I am <span className='text-[#915eff]'> Ritesh</span></h1>
            <p className={`text-3xl mt-4 text-white-100`}>I am Third year student pursuing B.Tech CSE degree. </p>
          </div>
      </div>
      <ComputersCanvas> </ComputersCanvas>
      
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center '>
         <a href='#about'> 
         <div className='w-[33px] h-[40px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2 pb-8'>
            <motion.dev animate={{y:[0,24,0]}} transition={{duration:1.5 , repeat:Infinity,repeatType :'loop'}} className="w-3 h-3 rounded-full bg-secondary mb-1"></motion.dev>
        </div>
        </a>
      </div>
    </section>   
  )
}

export default Hero