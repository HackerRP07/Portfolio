import {Html,useProgress} from '@react-three/drei';

const Loader = () => {
  const {progress} = useProgress();
  return (
    <Html>
      <span className='cancas-load'></span>
      <p syle={{fontsize:18 ,color:'#f1f1f1',fontWeight:800}}>{progress.toFixed(2)}% </p>
    </Html>
  )
}

export default Loader