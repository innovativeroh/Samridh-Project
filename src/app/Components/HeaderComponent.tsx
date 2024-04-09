import Link from 'next/link'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Menu } from '@mui/icons-material';

const Header = () => {
  return (
    <div className='w-full p-10 bg-black'>
        <div className='max-w-[1300px] m-auto'>
            <div className='flex flex-wrap justify-start items-center'>
                <div className='flex-[1]'>
                    <p className='text-white text-xl font-Orbitron'>Samridh</p>
                </div>
                <div className='flex-[2] hidden lg:block'>
                    <nav className='flex flex-wrap gap-[4rem] justify-center items-center text-white'>
                        <Link href='#' className='font-Orbitron text-xs'>Home</Link>
                        <Link href='#' className='font-Orbitron text-xs'>About</Link>
                        <Link href='#' className='font-Orbitron text-xs'>Portfolio</Link>
                        <Link href='#' className='font-Orbitron text-xs'>Testmonials</Link>
                        <Link href='#' className='font-Orbitron text-xs'>Contact</Link>
                    </nav>
                </div>
                <div className='flex-[1]'>
                <nav className='flex flex-wrap justify-end gap-5 items-center text-white'>
                        <Link href='#' className='hidden lg:block'><FacebookIcon /></Link>
                        <Link href='#' className='hidden lg:block'><LinkedInIcon /></Link>
                        <Link href='#' className='hidden lg:block'><YouTubeIcon /></Link>
                        <Link href='#' className='block lg:hidden'><Menu /></Link>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;