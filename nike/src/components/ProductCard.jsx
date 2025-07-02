import React from 'react'
import {star }from '../assets/icons'

const ProductCard = ({imgURL, name, price}) => {
  return (
    <div className=' flex flex-1 flex-col w-full max-sm:w-full shadow-3xl '>

        <img src={imgURL} alt={name} className=' bg-violet-300 w-[280px] h=[280px] rounded-2xl shadow-3xl hover:-translate-y-3' />
        <div className=' flex justify-start mt-8 gap-2.5 '>
            <img src={star} alt="ratings"
            width={25} height={25} />
            <p className=' font-montserrat text-xl leading-normal text-grey-300'>(4.5)</p>
            
        </div>
        <h3 className='mt-2 text-lg leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className=' mt-2 font-semibold font-montserrat text-orange-400 text-lg leading-normal'>{price}</p>
    </div>
  )
}

export default ProductCard