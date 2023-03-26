import {BallCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";
import { technologies } from "../constants";

  const Title=()=>{
    return(
      <h1 className="mb-20 flex justify-center font-extrabold text-[44px] text-gray-400">Technologies Known so far......</h1>
    )
  }

const Tech = () => {
  return (
    <div >
      <Title />
    <div className="flex flex-row flex-wrap justify-center gap-10 ">
      {technologies.map((technology)=>(
        <div className=" w-28 h-28 key={technology.name}">
            <BallCanvas icon={technology.icon}></BallCanvas>
        </div>
      ))}
    </div>
    </div>
  )
}

export default SectionWrapper(Tech,"");