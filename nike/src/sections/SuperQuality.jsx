import React from 'react'
import Button from '../constants/button'
import shoe from '../assets/images/shoe8.svg'
const SuperQuality = () => {
  return (
    <section id='about-us'
     className=' flex  justify-between items-center max-lg:flex-col
     gap-10 w-full'>

      <div className=' flex flex-1 flex-col '>


            <h2 className='font-palanquin capitalize lg:max-w-lg text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
                      We Provide You
                      <span className=' text-orange-600'> Super
                      </span>
                      <br />
                      <span className='inline-block mt-3'>Quality</span>  Shoes
                       
            </h2>

                  <p className=' mt-4 lg:max-w-lg info-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eaque exercitationem nostrum, id facere modi omnis voluptatem quasi porro placeat sit. Debitis atque provident cupiditate.lore
                  </p>

                  <p className=' mt-6 lg:max-w-lg info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cum odit modi praesentium inventore placeat!</p>
                  <div className=' mt-11'>
                    <Button label="Know More" />
                  </div>
                  
      </div>

      <div className=' flex flex-1 justify-center items-center '>
        <img src={shoe} alt="shoe8" width={570} height={522}/>
      </div>
    </section>
  )
}

export default SuperQuality