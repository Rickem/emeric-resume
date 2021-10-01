<div className="">
      <nav className="group w-screen sm:w-20 sm:hover:w-64 fixed bottom-0 bg-skin-primary transition duration-200 ease-in">
        <div className="h-16 sm:h-screen p-4 flex sm:flex-col items-center justify-between">
          {/* Logo */}
          <div className="hidden sm:block">
            <a href="#about" className="flex items-center justify-center sm:h-20 space-x-2 text-skin-blanc text-xl font-semibold uppercase tracking-wide">
              <span className="hidden sm:group-hover:block">Rickem</span>
              <ArrowSmRightIcon className="logo h-6" />
            </a>
          </div>
          <div className="w-full flex sm:flex-col items-center justify-between space-x-4 sm:space-x-0 sm:space-y-4">
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
              <span className="hidden sm:group-hover:block">Contact</span>
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

      <main className="sm:ml-14 p-10">
        <section>
          <h1>Hi, my name is</h1>
          <h2>Emeric Gnonhoue.</h2>
          <h3>I build mobile & web applications.</h3>
          <p>I'm a software engineer, I build and occasionnaly design </p>
          <button className="px-4 py-3 border-skin-primary rounded-lg">Get In Touch</button>
        </section>
        <section>
          <article className="py-16 px-6 sm:px-8">
            <header>
              <h1 className="flex flex-col item-center">
                <span className="text-skin-primary font-semibold tracking-wide uppercase">Title</span>
                <span className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">SubTitle</span>

                <hr className="mt-8 border-t-2 w-20 mx-auto"></hr>
              </h1>
            </header>

            <div className="mt-8 text-center">
              <pre className="inline-block bg-gray-800 rounded-md px-6 py-3 text-indigo-200">
                <span className="bg-yellow-200 bg-opacity-90 text-yellow-700">heloooooooooooo</span>
              </pre>
            </div>
          </article>
        </section>
      </main>
   </div>