import React from 'react'
import Navbar from '../components/Navbar'
import Shape from "../assets/images/shape.png";
import Aimene from "../assets/images/nouriAimene.jpeg";
import Abdellah from "../assets/images/arradAbdellah.jpg";
import Abdessamad from "../assets/images/traibizAbdessamad.jpeg";
import Mohamed from "../assets/images/azouaziMohamed.jpeg";
import Footer from '../components/Footer';
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="text-color2 h-screen flex flex-col">
      <Navbar />
      <Outlet />
      
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
            Notre Encadrant
          </div>
        </div>
        
        <div className="relative z-20 pt-32">
          <div className="z-20 relative bg-color11 border border-gray-200 w-96 p-10 rounded-3xl m-auto text-center flex flex-col items-center justify-center space-y-12">
            <div className="bg-white p-5 w-40 h-40 rounded-xl">
              
            </div>
            <div>
              <div className="text-2xl font-semibold">Mohamed AZOUAZI</div>
              <div className="pt-3 max-w-md text-base font-medium text-color6 leading-snug">
                Professeur a FS Ben Msik.
              </div>
            </div>
          </div>

          <img src={Shape} className="w-full absolute top-48 h-full" alt=""></img>
        </div>

        <div className="px-40 mb-44">
          {/* Our Team */}
          <div className="mt-60 z-40 relative ">
            <div className="text-4xl font-semibold">Notre Equipe</div>
          </div>
          <div className="mt-20">
            <div className="grid grid-cols-3 gap-4">
              <div className="z-20 relative bg-color11 border border-gray-200 w-full p-10 rounded-3xl m-auto text-center flex flex-col items-center justify-center space-y-12">
                <div className="bg-white p-1 w-40 h-40 rounded-xl border border-gray-200">
                  <img src={Abdessamad} alt="" className='rounded-lg h-full w-full' />
                </div>
                <div>
                  <div className="text-2xl font-semibold">Abdessamad TRAIBIZ</div>
                  <div className="pt-3 max-w-md text-base font-medium text-color6 leading-snug">
                    Etudiant en 5éme année a EMSI.
                  </div>
                </div>
              </div>

              <div className="z-20 relative bg-color11 border border-gray-200 w-full p-10 rounded-3xl m-auto text-center flex flex-col items-center justify-center space-y-12">
                <div className="bg-white p-1 w-40 h-40 rounded-xl border border-gray-200">
                  <img src={Abdellah} alt="" className='rounded-lg h-full w-full' />
                </div>
                <div>
                  <div className="text-2xl font-semibold">Abdellah ARRAD</div>
                  <div className="pt-3 max-w-md text-base font-medium text-color6 leading-snug">
                    Etudiant en 5éme année a EMSI.
                  </div>
                </div>
              </div>

              <div className="z-20 relative bg-color11 border border-gray-200 w-full p-10 rounded-3xl m-auto text-center flex flex-col items-center justify-center space-y-12">
                <div className="bg-white p-1 w-40 h-40 rounded-xl border border-gray-200">
                  <img src={Aimene} alt="" className='rounded-lg h-full w-full' />
                </div>
                <div>
                  <div className="text-2xl font-semibold">Aimene NOURI</div>
                  <div className="pt-3 max-w-md text-base font-medium text-color6 leading-snug">
                    Etudiant en 5éme année a EMSI.
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