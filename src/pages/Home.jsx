import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Box1 } from "../assets/icons/box1.svg";
import { ReactComponent as Box2 } from "../assets/icons/box2.svg";
import { ReactComponent as Box3 } from "../assets/icons/box3.svg";
import Shape from "../assets/images/shape.png";
import ValidDocument from "../assets/validDocument.csv";

const Home = () => {
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
          </div>
         </div>
         
        </div>

        <div className="relative text-center m-auto z-20 flex flex-col items-center justify-center">
          <div className="pt-36 max-w-5xl text-6xl font-semibold leading-tight">
            Document Authentication Solution Using Blockchain
          </div>
          <div className="pt-5 max-w-md text-0base font-medium text-Unselected leading-snug">
            Eliminate Friction. Be On The Lookout For Fake Documents.
            Fasten The Verification Of Your Documents
          </div>
        </div>
        
        <div className="relative z-20 pt-40">
          <div className="z-20 relative bg-color9 w-560 h-380 p-10 rounded-3xl m-auto ">
            <div className="bg-background w-full h-full p-20 rounded-xl flex items-center justify-center">
              <Logo className="h-40"/>
            </div>
          </div>

          <img src={Shape} className="w-full absolute top-48 h-full" alt=""></img>
        </div>
        
        <div className="px-40">
          {/* Feature Boxes */}
          <div className="mt-60 z-40 relative ">
            <div className="text-4xl font-semibold">Feature Boxes</div>
            <div className="pt-3 max-w-md text-0base font-medium text-Unselected leading-tight">
              Discover Our Features.
            </div>

            <div className="text-color2 mt-16 grid grid-cols-3 gap-8 h-full text-center">
              <div className="bg-color10 rounded-xl px-6 py-14 flex flex-col items-center justify-center space-y-8">
                <Box1 className="w-20" />
                <div>
                  <div className="text-xl font-semibold">Upload Document</div>
                  <div className="pt-3 max-w-md text-0base font-medium text-Unselected leading-snug">
                    Upload Your document as an organizer on our blockchain network.
                    Example, <a href={ValidDocument} className="underline text-color5" download>Valid Document.</a>
                  </div>
                </div>
              </div>
              <div className="bg-color10 rounded-xl px-6 py-14 flex flex-col items-center justify-center space-y-8">
                <Box2 className="w-20" />
                <div>
                  <div className="text-xl font-semibold">Verify Document</div>
                  <div className="pt-3 max-w-md text-0base font-medium text-Unselected leading-snug">
                    Verify document faster by just typing the ID of diploma.
                  </div>
                </div>
              </div>
              <div className="bg-color10 rounded-xl px-6 py-14 flex flex-col items-center justify-center space-y-8">
                <Box3 className="w-20" />
                <div>
                  <div className="text-xl font-semibold">Download Document</div>
                  <div className="pt-3 max-w-sm text-0base font-medium text-Unselected leading-snug">
                    Download document easily by just typing the ID of diploma.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="mt-40">
            <div>
              
            </div>
          </div>
        </div>

        {/* Line */}
        <div className="w-full bg-color3 h-0.2 opacity-70" />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
