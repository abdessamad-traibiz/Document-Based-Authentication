import React from 'react'
import Navbar from '../components/Navbar'
import Shape from "../assets/images/shape.png";
import Aimene from "../assets/images/nouriAimene.jpeg";
import Abdellah from "../assets/images/arradAbdellah.jpg";
import Abdessamad from "../assets/images/traibizabdessamad.jpg";
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="text-color2 h-screen flex flex-col">
      <Navbar />

      <div className="w-full">
        <div className="relative">
          <div className="absolute -top-16 left-32 h-screen">
            <div className="flex flex-row items-center h-full space-x-24">
              <div className="w-0.2 opacity-40 h-full bg-color3" />
              <div className="w-0.2 opacity-40 h-full bg-color3" />
              <div className="w-0.2 opacity-40 h-full bg-color3" />
              <div className="w-0.2 opacity-40 h-full bg-color3" />
              <div className="w-0.2 opacity-40 h-full bg-color3" />
              <div className="w-0.2 opacity-40 h-full bg-color3" />
              <div className="w-0.2 opacity-40 h-full bg-color3" />
              <div className="w-0.2 opacity-40 h-full bg-color3" />
              <div className="w-0.2 opacity-40 h-full bg-color3" />
              <div className="w-0.2 opacity-40 h-full bg-color3" />
              <div className="w-0.2 opacity-40 h-full bg-color3" />
              <div className="w-0.2 opacity-40 h-full bg-color3" />
              <div className="w-0.2 opacity-40 h-full bg-color3" />
              <div className="w-0.2 opacity-40 h-full bg-color3" />
            </div>
          </div>
        </div>

        <div className="px-40 relative text-center m-auto z-20 flex flex-col items-start justify-start">
          <div className="pt-36 text-4xl font-semibold leading-tight">
            Our Supevisor
          </div>
        </div>
        
        <div className="relative z-20 pt-32">
          <div className="z-20 relative bg-color10 w-450 p-10 rounded-3xl m-auto text-center flex flex-col items-center justify-center space-y-12">
            <div className="bg-background p-5 w-40 h-40 rounded-xl">
              
            </div>
            <div>
              <div className="text-2xl font-semibold">Mohamed Azouazi</div>
              <div className="pt-3 max-w-md text-base font-medium text-color6 leading-snug">
                Professor at FS Ben Msik.
              </div>
            </div>
          </div>

          <img src={Shape} className="w-full absolute top-48 h-full" alt=""></img>
        </div>

        <div className="px-40 mb-44">
          {/* Our Team */}
          <div className="mt-60 z-40 relative ">
            <div className="text-4xl font-semibold">Our Team</div>
          </div>
          <div className="mt-20">
            <div className="grid grid-cols-3 gap-4">
              <div className="z-20 relative bg-color10 w-full p-10 rounded-3xl m-auto text-center flex flex-col items-center justify-center space-y-12">
                <div className="bg-background p-2 w-40 h-40 rounded-xl">
                  <img src={Aimene} alt="" className='rounded-lg h-full w-full' />
                </div>
                <div>
                  <div className="text-2xl font-semibold">Aimene Nouri</div>
                  <div className="pt-3 max-w-md text-base font-medium text-color6 leading-snug">
                    Software engineering student at EMSI.
                  </div>
                </div>
              </div>

              <div className="z-20 relative bg-color10 w-full p-10 rounded-3xl m-auto text-center flex flex-col items-center justify-center space-y-12">
                <div className="bg-background p-2 w-40 h-40 rounded-xl">
                  <img src={Abdellah} alt="" className='rounded-lg h-full w-full' />
                </div>
                <div>
                  <div className="text-2xl font-semibold">Abdellah Arrad</div>
                  <div className="pt-3 max-w-md text-base font-medium text-color6 leading-snug">
                    Software engineering student at EMSI.
                  </div>
                </div>
              </div>

              <div className="z-20 relative bg-color10 w-full p-10 rounded-3xl m-auto text-center flex flex-col items-center justify-center space-y-12">
                <div className="bg-background p-2 w-40 h-40 rounded-xl">
                  <img src={Abdessamad} alt="" className='rounded-lg h-full w-full' />
                </div>
                <div>
                  <div className="text-2xl font-semibold">Abdessamad Traibiz</div>
                  <div className="pt-3 max-w-md text-base font-medium text-color6 leading-snug">
                    Software engineering student at EMSI.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        {/* Line */}
        <div className="w-full bg-color3 h-0.2 opacity-70" />
        <Footer />
      </div>
    </div>
  )
}

export default About