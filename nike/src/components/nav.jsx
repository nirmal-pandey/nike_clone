import React from 'react'
import {Link} from 'react-router-dom'
import {headerLogo} from '../assets/images';
import hamburger from '../assets/icons/hamburger.svg';

const Nav = () => {
  return (
   
    <header className='sm:px-16 px-8 py-8 absolute z-10 w-full'>

        <nav className=' flex justify-between items-center m-auto'>

            <a href="/">
                <img src={headerLogo} alt="" className=' m-0 w-[129px] h-[29px]'/>
            </a>

            <ul className=' gap-16 flex flex-1 justify-center items-center max-lg:hidden'>

                <li className=' font-montserrat leading-normal text-lg text-slate-gray'>
                    <Link to="/"> Home </Link>

                </li>

                <li className=' font-montserrat leading-normal text-lg text-slate-gray'>
                    <Link to="/"> About </Link>

                </li>

                <li className=' font-montserrat leading-normal text-lg text-slate-gray'>
                    <Link to="/"> Products </Link>

                </li>

                <li className=' font-montserrat leading-normal text-lg text-slate-gray'>
                    <Link to="/"> Contact </Link>

                </li>

                <div className=' hidden max-lg:block'>

                    <img src= {hamburger} alt="" width={25} height={25}/>

                </div>

                
                    
            </ul>

            <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
                <a href='/'>Sign in</a>
                <span>/</span>
                <a href='/'>Explore now</a>
            </div>
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt='hamburger icon' width={25} height={25} />
            </div>
            
        </nav>
    </header>
  )
}

export default Nav