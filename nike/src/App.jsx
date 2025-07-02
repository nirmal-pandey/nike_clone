import React from 'react';
import { Hero, PopularProducts, Services, SpecialOffers, CustomerReviews, Subscribe, SuperQuality, Footer } from './sections';
import Nav from './components/nav'


function App() {
  
 

  return (
    
    <main className=' relative'>

      <Nav/> 
      <section className=" pl-8 sm:pl-16 pr-8 sm:pr-16 pb-12 sm:pb-24">
        <Hero></Hero>
      </section>

      <section className=' sm:px-16 px-8 sm:py-24 py-12'> <PopularProducts/>  </section>

      <section className=" sm:px-16 px-8 sm:py-24 py-12"> <SuperQuality/> </section>


      <section className=" sm:px-16 px-8 sm:py-24 py-12"> <Services/>  </section>

      <section className=" sm:px-16 px-8 sm:py-24 py-111"> <SpecialOffers/> </section>

      
      
      <section className=" bg-blue-100 sm:px-16 px-8 sm:py-24 py-12"> <CustomerReviews/></section>
      <section className=" sm:px-16 px-8 sm:py-32 py-16 w-full "> <Subscribe/></section>
      <section className=" bg-black pb-8 padding-x padding-t text-white"> <Footer/></section>

    </main>
  )
}

export default App;
