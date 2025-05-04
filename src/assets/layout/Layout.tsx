import home from '../images/home.png';
import project from '../images/projeto.png';
import aboutme from '../images/aboutme.png';




export const Layout = ({ children }: { children: React.ReactNode }) => { 
    return (
      <body>
        <div className="flex flex-row min-h-screen overflow-hidden">	 

            <div className="bg-gray-100 w-32 lg:w-72 min-h-screen border-r-2 border-fuchsia-600 md:none">

            <div className="flex flex-none w-full justify-center items-center lg:py-16 ">

            <div className="text-purple-900 text-center text-2xl font-extrabold items-center border-indigo-500 lg:visible invisible animate-pulse">
              DIO<span className="text-yellow-500">.</span>ME
              </div>

            </div>
            <div>
              <nav className="visible lg:invisible flex w-fulll mt-40">
                <ul className="text-left ">
                  <li className="list-inside ml-2 mb-6 ">
                   <a href="em-breve" className="flex justify-start "> <img src={home} alt="Logo" className="object-contain h-6 w-6"/> </a>
                  </li>
                  <li className="list-inside ml-2 mb-6 ">
                   <a href="em-breve2" className="flex justify-start "> <img src={project} alt="Projetos" className="object-contain h-6 w-6"/> </a>
                  </li>
                  <li className="list-inside ml-2 mb-6 ">
                   <a href="em-breve2" className="flex justify-start "> <img src={aboutme} alt="Sobre a minha pessoa" className="object-contain h-6 w-6"/> </a>
                  </li>
                  
                </ul>
              </nav>
            </div>
            </div>
            <div className="bg-blue-500">Conteúdo</div>
            
            </div>
            <main className="main-content">{children}</main>

            

        
      </body>
        
        
        
      );
}