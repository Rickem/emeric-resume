import { HomeIcon , BriefcaseIcon, CogIcon, MailIcon, DownloadIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { useState } from 'react';

export default function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
    <nav className="group w-screen sm:w-20 sm:hover:w-64 fixed bottom-0 bg-skin-primary transition duration-200 ease-in">
      <div className="h-16 sm:h-screen p-4 flex sm:flex-col items-center justify-between">
        {/* Logo */}
        <div className="hidden sm:block">
          <a href="#about" className="flex items-center justify-center sm:h-20 space-x-2 text-skin-blanc text-xl font-semibold uppercase tracking-wide">
            <span className="hidden sm:group-hover:block">Rickem</span>
            <ArrowSmRightIcon className="logo h-6" />
          </a>
        </div>
        <div className="w-full flex sm:flex-col items-center justify-between sm:space-x-0 sm:space-y-4">
          <a href="#about" className="group flex items-center justify-center sm:h-20 space-x-2 text-skin-blanc filter grayscale opacity-70 transition duration-200 ease-in hover:grayscale-0 hover:opacity-100">
            <HomeIcon className="h-6" />
            <span className="hidden sm:group-hover:block">About</span>
          </a>
          <a href="#experience" className="flex items-center justify-center sm:h-20 space-x-2 text-skin-blanc filter grayscale opacity-70 transition duration-200 ease-in hover:grayscale-0 hover:opacity-100">
            <BriefcaseIcon className="h-6" />
            <span className="hidden sm:group-hover:block">Experience</span>
          </a>
          <a href="#work" className="flex items-center justify-center sm:h-20 space-x-2 text-skin-blanc filter grayscale opacity-70 transition duration-200 ease-in hover:grayscale-0 hover:opacity-100">
            <CogIcon className="h-6" />
            <span className="hidden sm:group-hover:block">Work</span>
          </a>
          <a href="#contact" className="flex items-center justify-center sm:h-20 space-x-2 text-skin-blanc filter grayscale opacity-70 transition duration-200 ease-in hover:grayscale-0 hover:opacity-100">
            <MailIcon className="h-6" />
            <span className="hidden sm:group-hover:block">Hire me</span>
          </a>
        </div>
        <div className="hidden sm:block">
          <a href="#contact" className="flex items-center justify-center sm:h-20 space-x-2 text-skin-blanc filter grayscale opacity-70 transition duration-200 ease-in hover:grayscale-0 hover:opacity-100">
            <DownloadIcon className="h-6" />
            <span className="hidden sm:group-hover:block">Download CV</span>
          </a>
        </div>
      </div>
    </nav>

    </>
    // <header>
    //   <div className="max-w-screen-xl mx-auto">
    //     <div className="flex items-center justify-between pt-5 pb-6 px-5 bg-gray-200">
    //       {/* Logo */}
    //       <div>
    //         <a href="#home">
    //           <span className="text-2xl text-skin-primary font-semibold">Rickem</span>
    //         </a>
    //       </div>
    //       <div className="-mr-2 -my-2 md:hidden">
    //         <button onClick={() => setShowMobileMenu(true)}
    //           className="inline-flex items-center justify-center p-2 rounded-md text-theme-aquamarine focus:outline-none transition duration-150 ease-in-out">
    //           <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
    //           </svg>
    //         </button>
    //       </div>
    //       {/* flex text-sm font-semibold items-center md:block */}
    //       <div className="hidden md:flex space-x-4">
    //         {/* menu items */}
    //         <a href="#about" className="flex items-center justify-center text-skin-muted hover:text-skin-inverted">
    //           <HomeIcon className="h-6 text-skin-inverted mr-2" />
    //           <span>About</span>
    //         </a>
    //         <a href="#experience" className="flex items-center justify-center text-skin-muted hover:text-skin-inverted">
    //           <BriefcaseIcon className="h-6 text-skin-inverted mr-2" />
    //           <span>Experience</span>
    //         </a>
    //         <a href="#work" className="flex items-center justify-center text-skin-muted hover:text-skin-inverted">
    //           <CogIcon className="h-6 text-skin-inverted mr-2" />
    //           <span>Work</span>
    //         </a>
    //         <a href="#contact" className="flex items-center justify-center text-skin-muted hover:text-skin-inverted">
    //           <MailIcon className="h-6 text-skin-inverted mr-2" />
    //           <span>Contact</span>
    //         </a>
    //         <a href="#contact" className="flex items-center justify-center text-skin-muted hover:text-skin-inverted px-4 py-2 border rounded-3xl">
    //           <DownloadIcon className="h-6 text-skin-inverted mr-2" />
    //           <span>Download CV</span>
    //         </a>
    //       </div>
    //       {/* mobile menu */}
    //       { showMobileMenu &&
    //         <div className="absolute z-20 top-0 inset-x-0 transition transform origin-top-right md:hidden">
    //           <div className="rounded-b-lg shadow-lg">
    //             <div className="shadow-lg bg-skin-inverted">
    //               <div className="pt-5 pb-6 px-5 space-y-6 sm:space-y-8 sm:pb-8">
    //                 <div className="flex items-center justify-center">
    //                   {/* <div>
    //                     <a href="#home">
    //                       <span className="text-2xl text-skin-primary font-semibold">Rickem</span>
    //                     </a>
    //                   </div> */}
    //                   <div className="-mr-2">
    //                     <button onClick={() => setShowMobileMenu(false)}
    //                       className="inline-flex items-center justify-center p-2 rounded-md text-theme-gray-deep hover:text-theme-aquamarine hover:bg-theme-blue-base focus:outline-none focus:bg-theme-blue-base focus:text-theme-aquamarine transition duration-150 ease-in-out">
    //                       <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                         <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
    //                       </svg>
    //                     </button>
    //                   </div>
    //                 </div>
    //                 <div className="">
    //                   <nav className="flex flex-col space-y-8">
    //                     <a href="#about" className="flex items-center justify-center text-skin-muted hover:text-skin-inverted">
    //                       <HomeIcon className="h-6 text-skin-inverted mr-2" />
    //                       <span>About</span>
    //                     </a>
    //                     <a href="#experience" className="flex items-center justify-center text-skin-muted hover:text-skin-inverted">
    //                       <BriefcaseIcon className="h-6 text-skin-inverted mr-2" />
    //                       <span>Experience</span>
    //                     </a>
    //                     <a href="#work" className="flex items-center justify-center text-skin-muted hover:text-skin-inverted">
    //                       <CogIcon className="h-6 text-skin-inverted mr-2" />
    //                       <span>Work</span>
    //                     </a>
    //                     <a href="#contact" className="flex items-center justify-center text-skin-muted hover:text-skin-inverted">
    //                       <MailIcon className="h-6 text-skin-inverted mr-2" />
    //                       <span>Contact</span>
    //                     </a>
    //                     <a href="#contact" className="flex items-center justify-center text-skin-primary hover:text-skin-inverted px-4 py-2 border border-skin-primary rounded-3xl">
    //                       <DownloadIcon className="h-6 text-skin-inverted mr-2" />
    //                       <span>Download CV</span>
    //                     </a>
    //                   </nav>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       }
    //     </div>
    //   </div>
    // </header>
  )
}
