
import { useState } from 'react';
import { hamburger } from '../assets/icons'
import {headerLogo} from '../assets/images'
import { navLinks } from '../constants'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='padding-x py-8 absolute z-10 w-full '>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
        <img src={headerLogo} alt='logo' className='width={130} height{29}' />
        </a>
        {/* ....for desktop */}
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((link)=>{
            return <li key={link.label}>
              <a href={link.href} className='font-montserrat text-lg leading-normal text-slate-gray'>{link.label}</a>
             </li>
          })}
        </ul>
        {/* for mobile */}
        <button className='' onClick={()=>setIsOpen(!isOpen)}>
          <img src={isOpen ? hamburger : hamburger} alt="hamburger" width={25} height={25} className='hidden max-lg:block'/>
        </button>

      </nav>
    </header>
  )
}

export default Nav