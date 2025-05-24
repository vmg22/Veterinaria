import React from 'react'
import logo from '../assets/logo.png'; // Ajusta la ruta según tu estructura
  {/*agregar recat router dom para cambiar los href */}

  
const Header = () => {
  return (
    <div>


      <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            {/*cambiar a link */}
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-16" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PetLink</span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
           {/*cambiar a link */}
            <a href="#" className="text-sm text-blue-600 dark:text-blue-500 hover:underline">Login</a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page"> <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
</svg>
</a>
              </li>
              <li>
                <a href="#" className="text-gray-900 dark:text-white hover:underline">Veterinario</a>
              </li>
              
              <li>
                <a href="#" className="text-gray-900 dark:text-white hover:underline">Features</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>



      




    </div>
  )
}

export default Header


