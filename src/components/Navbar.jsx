import { useState } from "react"
import logo from "../assets/logo.png"
import {navItems} from "../constants"
import {Menu, X} from "lucide-react"

function Navbar() { 

    const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setmobileDrawerOpen(v => !v)
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ">

        <div className="container px-4 mx-auto relative text-sm ">

            <div className="flex justify-between items-center ">

                <div className='flex items-center flex-shrink-0'>

                    <img src={logo} alt="" className="h-10 w-10 mr-2" />

<span className="text-xl tracking-tight">VirtualR</span>

                </div>

<ul className="hidden lg:flex ml-14 space-x-12">
{navItems.map((item,i) => (
    <li key={i}>
        <a href={item.href}>{item.label}</a>
    </li>
))}
</ul>


<div className="hidden lg:flex justify-center space-x-12 items-center ">
    <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>

    <a href="" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">Create an account</a>
</div>

<div className="lg:hidden md:flex flex-col justify-end">
    <button 
    onClick={toggleNavbar}
    >{mobileDrawerOpen? <X/>:<Menu/>}</button>
</div>

</div>




        </div>

{mobileDrawerOpen && (
    <div className="fixed top-16 w-full right-0 z-20 bg-neutral-900  p-12 flex flex-col justify-center items-center lg:hidden ">

        <ul>
            {navItems.map((item,i) => (
    <li key={i}  className="py-4">
        <a href={item.href}>{item.label}</a>
    </li>
))}
        </ul>

<div className="flex space-x-6">
      <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>

    <a href="" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">Create an account</a>
</div>

    </div>
)}

      
    </nav>
  )
}

export default Navbar
