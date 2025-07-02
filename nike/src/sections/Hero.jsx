import React , {useState}from 'react'
import { shoes, statistics } from '../constants'
import Button from '../constants/button'
import { arrowRight } from '../assets/icons'
import { bigShoe1 } from '../assets/images'
import Shoecard from '../components/Shoecard'

const Hero = () => {

  const [bigShoeImg , setbigShoeImg] = useState(bigShoe1);

  return (

    

    <section 
      id='home'
      className=' w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container' 
    
    >

      <div className='
            relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>


                  <p className=' text-xl font-montserrat text-red-400'>Our Summer Collection</p>

                  <h1 className=' mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>

                      <span>
                        The New Arrival
                      </span>
                      <br />
                      <span className=' text-red-500 inline-block mt-3'>Nike</span> Shoes
                       
                  </h1>

                  <p className=' font-montserrat pb-14 text-lg leading-8 mt-6 mb-15 text-slate-500'>
                    Discover Stylish Nike Arrivals , quality comforts
                  </p>

                  <Button label="Get Started" iconURL={arrowRight}/>
                  

                  <div className='  flex justify-start items-start flex-wrap w-full mt-20 gap-16' >
                    
                    {statistics.map((stat)=>(
                      
                      <div key={stat.label}>
                        <p className=' font-palanquin text-4xl font-bold'>{stat.value}</p>
                        <p className=' font-montserrat text-slate-500'>{stat.label}</p>
                        
                      </div>
                    ))}
                  
                  </div>

      </div>

      <div className=' bg-violet-300 relative flex flex-1 justify-center bg-cover bg-center xl:min-h-screen
      max-xl-py-40' >
        <img src={bigShoeImg} alt="bigshoe"
        width={610}
        height={500}
        className=' object-contain relative z-10 '/>

        <div className=' flex sm:gap-4 absolute -bottom-[5%] 
                          sm:left-[10%] max-sm:px-6 '>
              {shoes.map((shoe)=>
              (
                  <div key={shoe} >
                      <Shoecard imgURL={shoe}
                      changeBigShoeimage = {(shoe)=>{
                        setbigShoeImg(shoe)
                      }}
                      bigShoeImg={bigShoeImg}
                      />
                  </div>
              ))}

        </div>

        
      </div>


    </section>
  )
}

export default Hero