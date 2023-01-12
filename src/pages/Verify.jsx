import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import Shape from "../assets/images/shape.png";
import Footer from '../components/Footer';
import { verifyDocument, verifyQr } from "../Utils/Web3Client";
import { Oval } from "react-loader-spinner";
import VerifiedFile from '../components/VerifiedFile';
import ScanQRcode from "../components/ScanQRcode";
import QrScanner from 'qr-scanner';
import { scroller } from "react-scroll";

const Verify = () => {
  const [Id, setId] = useState("");
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const verify = () => {
    verifyDocument(Id).then((result) => setStatus(result)); 
    setPending(true)
    setTimeout(() => {
        setPending(false)
        setIsVerified(true)
    }, 2000);

    scroller.scrollTo("verifiedDiv", {
      duration: 1100,
      delay: 100,
      smooth: true,
      offset: -150,
    });
  }
  
  const verifyQrCode = async (file) => {
    const hash = await QrScanner.scanImage(file);
    console.log(hash)
    verifyQr(hash).then((res) => setStatus(res)); 
    setPending(true)
    setTimeout(() => {
        setPending(false)
        setIsVerified(true)
    }, 2000);

    scroller.scrollTo("verifiedDiv", {
      duration: 1100,
      delay: 100,
      smooth: true,
      offset: -150,
    });
  }

  return (
    <div className="text-color2 h-screen flex flex-col">
      <Navbar />

      <div className="w-full">
        <div className="relative">

         <div className="absolute -top-16 left-32 h-screen">
          <div className="flex flex-row items-center h-full space-x-24">
            <div className="w-0.2 opacity-20 h-full bg-Unselected" />
            <div className="w-0.2 opacity-20 h-full bg-Unselected" />
            <div className="w-0.2 opacity-20 h-full bg-Unselected" />
            <div className="w-0.2 opacity-20 h-full bg-Unselected" />
            <div className="w-0.2 opacity-20 h-full bg-Unselected" />
            <div className="w-0.2 opacity-20 h-full bg-Unselected" />
            <div className="w-0.2 opacity-20 h-full bg-Unselected" />
            <div className="w-0.2 opacity-20 h-full bg-Unselected" />
            <div className="w-0.2 opacity-20 h-full bg-Unselected" />
            <div className="w-0.2 opacity-20 h-full bg-Unselected" />
            <div className="w-0.2 opacity-20 h-full bg-Unselected" />
            <div className="w-0.2 opacity-20 h-full bg-Unselected" />
            <div className="w-0.2 opacity-20 h-full bg-Unselected" />
            <div className="w-0.2 opacity-20 h-full bg-Unselected" />
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
          {/* Verify Document */}
          <div className="mt-48">
            <div className="text-4xl font-semibold">Verify Document</div>
            <div className="mt-20 z-20 relative bg-color3 w-760 h-full p-10 rounded-3xl m-auto ">
              <div className="bg-background rounded-xl flex flex-row items-center justify-center w-full h-full">
                <input
                  type="text"
                  name="IdHash"
                  placeholder="Enter the Id of Diploma"
                  onChange={(e) => setId(e.target.value)}
                  className="bg-background w-full h-full py-5 rounded-xl outline-none px-4 text-base"
                ></input>
                <button onClick={verify} className="text-white px-12 py-3.5 bg-color7 rounded-xl h-full text-1base font-medium mr-0.5 hover:opacity-75 transition-all ease-in-out duration-150">
                  Verify
                </button>
              </div>
            </div>
          
            {/* Scan QR code */}
            <ScanQRcode verifyQrCode={verifyQrCode} />
            

            {/* if document is verified */}
            {pending ? 
              <div className="mt-10 z-20 relative bg-color3 w-fit h-fit px-10 py-6 rounded-3xl m-auto">
                <Oval
                  height="44"
                  width="44"
                  color="#8054FF"
                  radius="9"
                  ariaLabel="loading"
                  wrapperStyle
                  wrapperClass
                />
              </div>
            :
              <div name="verifiedDiv">
                {
                  isVerified && <VerifiedFile status={status}/>
                }
              </div>
            }
          </div>

          {/* Download Document */}
          <div className="mt-48 mb-44">
            <div className="text-4xl font-semibold">Download Document</div>
            <div className="mt-20 z-20 relative bg-color3 w-760 h-full p-10 rounded-3xl m-auto ">
              <div className="bg-background rounded-xl flex flex-row items-center justify-center w-full h-full">
                <input
                  type="text"
                  name="IdHash"
                  placeholder="Enter the Id of Diploma"
                  className="bg-background w-full h-full py-5 rounded-xl outline-none px-4 text-base"
                ></input>
                <button className="text-white px-9 py-3.5 bg-color7 rounded-xl h-full text-1base font-medium mr-0.5 hover:opacity-75 transition-all ease-in-out duration-150">
                  Download
                </button>
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

export default Verify