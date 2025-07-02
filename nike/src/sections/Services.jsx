import React from 'react'
import ServiceCards from '../components/ServiceCards'
import { services } from '../constants'


const Services = () => {
  return (
    <section className=' flex justify-center flex-wrap gap-9'>
         
         
          {services.map((service)=>(
              <ServiceCards key={service.label} {...service}/>
          ))}
         

    </section>
  )
}

export default Services