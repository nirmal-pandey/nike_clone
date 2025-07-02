import React from 'react'

const ServiceCards = ({imgURL, label ,subtext}) => {
  return (
    
        <div className=' flex-1 sm:w-[350px] sm:min-w-[350px]
                        w-full rounded-[20px] shadow-2xl px-10 py-16 hover:bg-orange-300 hover:text-white  '>

            <div className=' bg-orange-600 w-11 h-11 flex justify-center items-center rounded-full'>

                <img src={imgURL} alt={label} width={25} height={25} />
            </div>

            <h1 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>{label}</h1>
            <p className='mt-3 break-words font-montserrat text-lg leading-normal text-grey-300'>{subtext}</p>

        </div>
        
    
  )
}

export default ServiceCards