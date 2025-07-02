import React from 'react'
import Button from '../constants/button'
import arrow from '../assets/icons/arrow-right.svg'
import {offer} from '../assets/images'

const SpecialOffers = () => {
  return (
    <section className=' flex flex-col justify-center items-center'>

      <div>

        <span className=' font-palanquin capitalize lg:max-w-lg text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold text-orange-600'>Special</span> <span className=' font-palanquin capitalize lg:max-w-lg text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>Offer</span>

        <p className=' mt-4 w-full info-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio perferendis hic repudiandae enim nostrum, error ipsam blanditiis accusantium? Voluptatum doloremque illo ut impedit eveniet corporis sapiente quasi architecto. Amet, neque?</p>

        <p className=' mt-4 w-full info-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam harum veritatis debitis consequatur est asperiores natus quaerat nam amet voluptatibus.</p>

        <div className=' flex mt-8 gap-6'>

          <Button label="Shop now" iconURL={arrow}  ></Button>
          <Button label ="Learn more" variant="secondary"></Button>
        </div>
      </div>

      <div className=' mt-20'>

        <img src={offer} alt="" />
      </div>
    </section>
  )
}

export default SpecialOffers