import React from 'react'
import {products} from  '../constants'
import ProductCard from '../components/ProductCard'


const PopularProducts = () => {
  return (
    
    <section id="products"
    className=' max-sm:mt-12'>

      <div className=' flex flex-col justify-start gap-7'>
        <h2 className=' font-montserrat font-bold text-4xl'> Popular Products </h2>
        <span className='text-orange-600'>Shoes</span>
        <p className=' text-lg font-mono lg:max-w-lg mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur repellendus provident voluptas sequi</p>
      </div>

      <div className=" grid mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
      sm:gap-4 gap-14">
        
          {products.map((product)=>(
            <ProductCard key ={product.name} {...product} />
          ))}
        
      </div>
    </section>
  )
}

export default PopularProducts