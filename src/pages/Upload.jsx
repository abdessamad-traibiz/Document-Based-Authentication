import React, { useCallback, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Upload } from "../assets/icons/upload.svg";
import Shape from "../assets/images/shape.png";
import UploadedFile from "../components/UploadedFile";
import VerifiedFile from "../components/VerifiedFile";
import { verifyDocument, verifyQr, downloadDiploma, downloadDiplomaQrCode } from "../Utils/Web3Client";

import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Oval } from "react-loader-spinner";
import ScanQRcode from "../components/ScanQRcode";
import QrScanner from 'qr-scanner';
import { scroller } from "react-scroll";
import { saveAs } from "file-saver";

const MAXSIZE = 104857600

const UploadPage = () => {
  const [document, setDocument] = useState(null);
  const [Id, setId] = useState("");
  const [isDropped, setIsDropped] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [status, setStatus] = useState(false);
  const [pending, setPending] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    if(acceptedFiles.length === 1){
      setDocument(acceptedFiles[0])
    }
    setIsDropped(true);
  }, []);

  const onDropRejected = useCallback((fileRejections, event) => {
    setIsDropped(false);
    toast.error(fileRejections[0].errors[0].message)
  }, []);

  const fileValidator = (file) => {
    if (file.size > MAXSIZE) {
      return {
        code: "size-too-large",
        message: `Document size is larger than 100MB`,
      };
    }
    return null;
  };

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    onDropRejected,
    validator: fileValidator,
    accept: { "text/csv": [".csv"] },
  });

  const showToast = () => {
    toast.success("File uploaded successfully to blockchain")
  };

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

  const downloadDip = () => {
    downloadDiploma(Id).then((res) => {
      if(res !== "") 
        saveAs(res, `Diploma_id_${Id}.png`)
      else 
        alert ("no file found")
    }).catch((err) => console.log(err)); 
    setDownloading(true)
    setTimeout(() => {
      setDownloading(false)
    }, 2000);
  }

  const downloadDipQrCode = async (file) => {
    const hash = await QrScanner.scanImage(file);
    const id = 10
    downloadDiplomaQrCode(hash).then((res) => {
      if(res !== "") 
        saveAs(res, `Diploma_${id}.png`)
      else 
        alert("no file found")
    }).catch((err) => alert(err)); 
    setDownloading(true)
    setTimeout(() => {
      setDownloading(false)
    }, 2000);
  }

  return (
    <div className="text-color2 h-full">
      <ToastContainer toastStyle={{ backgroundColor: "#FFF8E1" }}/>
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

        <div className="relative text-center m-auto z-20 flex flex-col items-center justify-center">
          <div className="pt-36 max-w-5xl text-6xl font-semibold leading-tight">
            Document Authentication Solution Using Blockchain
          </div>
          <div className="pt-5 max-w-md text-0base font-medium text-Unselected leading-snug">
            Eliminate Friction. Be On The Lookout For Fake Documents. Fasten The
            Verification Of Your Documents
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
          {/* Upload Document */}
          <div className="mt-60 z-40 relative ">
            <div className="text-4xl font-semibold">Upload Your Document</div>

            <div className="mt-20 z-20 relative bg-color3 w-660 h-full p-10 rounded-3xl m-auto flex flex-col items-center justify-center ">
              <div className={`border-2 border-dotted bg-background w-full h-full rounded-xl ${isDragActive ? "border-color5" : "border-color3"}`}>
                <div className="flex items-center flex-col w-full h-full focus:outline-0 space-y-10 py-6" {...getRootProps()}>
                  <input
                    {...getInputProps()}
                    // accept=".pdf"
                    multiple={false}
                    type="file"
                    className="hidden w-full h-full"
                  />
                  <div className="bg-color4 border-4 border-stroke1 rounded-full w-24 h-24 flex items-center justify-center">
                    <Upload className="w-9 h-9 stroke-stroke1"/>
                  </div>
                  <div className="text-0base text-center flex flex-col">
                    <p className="text-color6">
                      <span className="text-color5 cursor-pointer">
                        Click to browse file
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-color6">
                      your document here to start uploading (Format: .csv)
                    </p>
                  </div>
                </div>
              </div>

              {isDropped && <UploadedFile document={document} acceptedFiles={acceptedFiles} isDropped={setIsDropped} showToast={showToast}/>}
            </div>
          </div>

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
            <ScanQRcode action={verifyQrCode} />
            

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
                  onChange={(e) => setId(e.target.value)}
                  placeholder="Enter the Id of Diploma"
                  className="bg-background w-full h-full py-5 rounded-xl outline-none px-4 text-base"
                ></input>
                <button onClick={downloadDip} className="text-white px-9 py-3.5 bg-color7 rounded-xl h-full text-1base font-medium mr-0.5 hover:opacity-75 transition-all ease-in-out duration-150">
                  {downloading ? 
                    <Oval
                      height="20"
                      width="20"
                      color="#8054FF"
                      radius="9"
                      ariaLabel="loading"
                      wrapperStyle
                      wrapperClass
                    />
                  :
                    <p>Download</p>
                  }
                </button>
              </div>
            </div>
          
            {/* Scan QR code */}
            <ScanQRcode action={downloadDipQrCode} />
          </div>
        </div>

        {/* Line */}
        <div className="w-full bg-color3 h-0.2 opacity-70" />
        <Footer />
      </div>
    </div>
  );
};

export default UploadPage;
