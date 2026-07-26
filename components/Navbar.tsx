import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-blue-600 p-4 text-white flex justify-between items-center'>
        <h1 className='text-xl font-bold transition-transform duration-300 ease-in-out hover:scale-130 '> My App</h1>
        <ul className='flex space-x-5'>
        <li> 
            <a href="/" className=' hover:text-emerald-800'> Home</a>
        </li>
        <li> 
            <a href="/about" className='hover:text-fuchsia-800'> About</a>
        </li>
         <li> 
            <a href="/communities" className='hover:text-orange-600'> Communities</a>
        </li>
         <li> 
            <a href="/topics" className='hover:text-mauve-950'> Topics</a>
        </li>
         <li> 
            <a href="/developers" className='hover:text-amber-300'> Developers</a>
        </li>

        </ul>
    </nav>
        
        
  )
}

export default Navbar
