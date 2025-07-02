import React from 'react'

const Shoecard = ({imgURL , changeBigShoeimage, bigShoeImg}) => {

    const handleClick= ()=>{
        if(bigShoeImg != imgURL.bigShoe){
            changeBigShoeimage(imgURL.bigShoe);
        }
    }
  return (
    
    <div className={` border-2 rounded-xl
        ${ bigShoeImg === imgURL.bigShoe ? 'border-orange-600'
        :'border-transparent'} cursor-pointer max-sm:flex-1 shadow-2xl hover:-translate-y-2`
    }
    onClick={handleClick}
    >
        <div className=' bg-orange-300 bg-cover flex justify-center items-center sm:w-40 
        sm:h-40 rounded-xl '>
            <img src={imgURL.thumbnail} alt="" 
            width={127}
            height={103}
            className=' object-contain'/>
        </div>

    </div>
  )
}

export default Shoecard