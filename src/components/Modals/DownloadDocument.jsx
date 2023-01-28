import React, { useState } from "react";
import Divider from "../Divider";
import { downloadDiploma, downloadDiplomaQrCode } from "../../Utils/Web3Client";
import ScanQRcode from "../ScanQRcode";

import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import QrScanner from "qr-scanner";
import { saveAs } from "file-saver";
import { ToastContainer, toast } from "react-toastify";

const DownloadDocument = () => {
  const navigate = useNavigate();
  const [Id, setId] = useState("");
  const [downloading, setDownloading] = useState(false);

  const downloadDip = () => {
    if (Id === "") return toast.warning("Veuillez saisir Id du diplome");

    downloadDiploma(Id)
        .then((res) => {
            if (res !== "") saveAs(res, `Diploma_id_${Id}.png`);
            else showToast("Aucun diplome trouvé");
        })
        .catch((err) => console.log(err));
    setDownloading(true);
    setTimeout(() => {
    setDownloading(false);
    }, 2000);
  };

  const downloadDipQrCode = async (file) => {
    const hash = await QrScanner.scanImage(file).catch((error) => showToast(error));
    downloadDiplomaQrCode(hash)
      .then((res) => {
        if (res !== "") saveAs(res, `Diploma_${Id}.png`);
        else showToast("Aucun diplome trouvé");
      })
      .catch((err) => console.log(err));
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
                  Télécharger Diplôme
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

              <div className="px-8 py-8 w-full relative overflow-auto h-96 md:h-650">
                <div className="z-20 m-auto border border-gray-200 bg-color11 w-760 p-6 rounded-3xl">
                  <div className="bg-white border border-gray-200 rounded-xl flex flex-row items-center justify-center w-full h-full">
                    <input
                      type="text"
                      name="IdHash"
                      placeholder="Saisir Id du diplôme"
                      onChange={(e) => setId(e.target.value)}
                      className="bg-white w-full h-full py-5 rounded-xl outline-none px-4 text-base"
                    ></input>
                    <button
                      onClick={downloadDip}
                      className="text-white px-12 py-3.5 bg-color7 rounded-1lg h-full text-1base font-medium mr-0.5 hover:opacity-75 transition-all ease-in-out duration-150"
                    >
                      {downloading ? (
                        <Oval
                          height="20"
                          width="20"
                          color="#8054FF"
                          radius="9"
                          ariaLabel="loading"
                          wrapperStyle
                          wrapperClass
                        />
                      ) : (
                        <p>Télécharger</p>
                      )}
                    </button>
                  </div>
                </div>

                <div className="mt-12 text-2xl text-center font-semibold">
                  Ou Scanner le code QR
                </div>

                {/* Scan QR code */}
                <ScanQRcode action={downloadDipQrCode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadDocument;
