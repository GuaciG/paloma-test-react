import { useState } from 'react'
import MenuIcon from './MenuIcon'

function Navigation() {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <nav
        className={
          navbar
            ? 'block absolute bg-gray-500 xl:bg-transparent px-6 right-0 top-15 h-screen w-full text-gray-600 z-20 transition-all transform xl:fixed xl:right-0 xl:top-0 xl:bottom-0 xl:flex xl:h-full xl:w-auto xl:z-20 xl:-rotate-90 xl:-translate-x-64 xl:translate-y-[8.75rem]'
            : 'hidden absolute bg-gray-500 xl:bg-transparent px-6 right-0 top-15 h-screen w-full text-gray-600 z-20 transition-all transform xl:fixed xl:right-0 xl:top-0 xl:bottom-0 xl:flex xl:h-full xl:w-auto xl:z-20 xl:-rotate-90 xl:-translate-x-64 xl:translate-y-[8.75rem]'
        }
      >
        <div className='xl:hidden flex justify-end p-5'>
          <button
            onClick={() => setNavbar(!navbar)}
            className='xl:hidden block text-3xl font-bold text-gray-300'
            id='close-btn'
          >
            &#9587;
          </button>
        </div>
        <ul className='h-[100%] text-gray-300 tracking-wider uppercase text-7xl xl:text-8xl [&>li>a]:inline-block'>
          <li>
            <a
              href='#'
              className='transform hover:scale-75 transition duration-500'
            >
              hear
            </a>
          </li>
          <li>
            <a
              href='#'
              className='transform hover:scale-75 transition duration-500'
            >
              latest
            </a>
          </li>
          <li>
            <a
              href='#'
              className='transform hover:scale-75 transition duration-500'
            >
              tour
            </a>
          </li>
          <li>
            <a
              href='#'
              className='transform hover:scale-75 transition duration-500'
            >
              see
            </a>
          </li>
          <li>
            <a
              href='#'
              className='transform hover:scale-75 transition duration-500'
            >
              shop
            </a>
          </li>
          <li>
            <a
              href='#'
              className='transform hover:scale-75 transition duration-500'
            >
              watch
            </a>
          </li>
          <li>
            <a
              href='#'
              className='transform hover:scale-75 transition duration-500'
            >
              personal
            </a>
          </li>
          <li>
            <a
              href='#'
              className='transform hover:scale-75 transition duration-500'
            >
              aid
            </a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => setNavbar(!navbar)}
        className='xl:hidden block absolute top-4 right-4 text-gray-300 p-3'
      >
        <a href='#'>
          <MenuIcon />
        </a>
      </button>
    </>
  )
}

export default Navigation
