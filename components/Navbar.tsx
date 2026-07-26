import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-blue-600 p-4 text-white flex justify-between items-center'>
        <h1 className='text-xl font-bold'> My App</h1>
        <ul className='flex space-x-5'>
        <li> 
            <a href="/"> Home</a>
        </li>
        <li> 
            <a href="/about"> About</a>
        </li>
         <li> 
            <a href="/communities"> Communities</a>
        </li>
         <li> 
            <a href="/topics"> Topics</a>
        </li>
         <li> 
            <a href="/developers"> Developers</a>
        </li>

        </ul>
    </nav>
        
        
  )
}

export default Navbar