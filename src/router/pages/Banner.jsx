
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'
import { motion } from "motion/react"
const Banner = () => {
    return (
        <div className="grid grid-cols-4 bg-blue-100">
            
            <div className="col-span-2 my-10 p-16 py-4">
<motion.div
animate={{
    scale: 1,
    transition: { duration: 2 }
  }}>
<h1 className="text-4xl ">Get The Right Job You Deserve </h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing .</p>
</motion.div>
<motion.h1 

animate={{color:['#ff8a3e','#ff3eee']}}
className="text-3xl"
>job for you</motion.h1>

            </div>
            <div className="col-span-2 py-4">
< motion.img src={team1} 
animate={{y:[0,50,0]}}
transition={{duration:10,repeat:Infinity}}
alt="" className='max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-t-8 border-yellow-300  shadow-2xl'  />
< motion.img src={team2} 
animate={{x:[50,100,50]}}
transition={{duration:10, delay:5,repeat:Infinity}}
alt="" className='max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-t-8 border-yellow-300  shadow-2xl'  />
            </div>
        </div>
    );
};

export default Banner;