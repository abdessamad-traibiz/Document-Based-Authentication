import React, { useRef, useState } from "react";
import Divider from "../Divider";
import { verifyDocument, verifyQr } from "../../Utils/Web3Client";

import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import ScanQRcode from "../ScanQRcode";
import QrScanner from "qr-scanner";
import VerifiedFile from "../VerifiedFile";
import { ToastContainer, toast } from "react-toastify";

const VerifyDocument = () => {
  const myRef = useRef(null)
  const navigate = useNavigate();
  const [Id, setId] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [status, setStatus] = useState(false);
  const [pending, setPending] = useState(false);

  const verify = () => {
    if(Id === "")
      return toast.warning("Veuillez saisir Id du diplome")

    verifyDocument(Id).then((result) => setStatus(result));
    setPending(true);
    setTimeout(() => {
      setPending(false);
      setIsVerified(true);
    }, 2000);

    myRef.current.scrollIntoView()  
  };

  const verifyQrCode = async (file) => {
    const hash = await QrScanner.scanImage(file).catch((error) => showToast(error));
    verifyQr(hash).then((res) => setStatus(res)).catch((error) => console.log(error));
    setPending(true);
    setTimeout(() => {
      setPending(false);
      setIsVerified(true);
    }, 2000);
    
    myRef.current.scrollIntoView() 
  };

  const showToast = (error) => {
    toast.error(error)
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full h-full px-4 fixed flex justify-center items-center z-50">
        <div className="fixed inset-0 bg-dark bg-opacity-50" />
        <div className="h-auto w-full md:w-3/4">
          <div className="relative bg-white rounded-xl overflow-hidden text-left shadow-xl transform transition-all w-full h-full">
            <div className="bg-white">
              <div className="px-4 py-3.5 relative flex items-center">
                <h1 className="text-xl font-semibold text-color8 -mt-0.5">
                  V??rifier Dipl??me
                </h1>
                <div
                  onClick={() => navigate(-1)}
                  className="absolute bg-gray-50 border border-gray-200 rounded-lg right-4 flex items-center justify-center cursor-pointer w-7 h-7 p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="#0D1A30"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>

              <Divider mt="mt-0" borderColor="border-gray-200" />

              <div className="px-8 py-8 w-full relative overflow-y-auto h-96 md:h-650 scroll-smooth">
                <div className="z-20 relative border border-gray-200 bg-color11 w-760 p-6 rounded-3xl m-auto">
                  <div className="bg-white border border-gray-200 rounded-xl flex flex-row items-center justify-center w-full h-full">
                    <input
                      type="text"
                      name="IdHash"
                      placeholder="Saisir Id du dipl??me"
                      onChange={(e) => setId(e.target.value)}
                      className="bg-white w-full h-full py-5 rounded-xl outline-none px-4 text-base"
                    ></input>
                    <button
                      onClick={verify}
                      className="text-white px-12 py-3.5 bg-color7 rounded-1lg h-full text-1base font-medium mr-0.5 hover:opacity-75 transition-all ease-in-out duration-150"
                    >
                      V??rifier
                    </button>
                  </div>
                </div>

                <div className="mt-12 text-2xl text-center font-semibold">
                  Ou Scanner le code QR
                </div>

                {/* Scan QR code */}
                <ScanQRcode action={verifyQrCode} />

                {/* if document is verified */}
                <div id="verifiedDiv" ref={myRef}>
                  {pending ? (
                    <div className="mt-10 z-20 relative bg-color11 border border-gray-200 w-fit h-fit px-10 py-6 rounded-3xl m-auto">
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
                  ) : (
                    isVerified && <VerifiedFile status={status} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyDocument;
