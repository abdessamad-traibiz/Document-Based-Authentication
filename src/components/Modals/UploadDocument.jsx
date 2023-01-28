import React, { useCallback, useState } from "react";
import Divider from "../Divider";
import { ReactComponent as Upload } from "../../assets/icons/upload.svg";

import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UploadedFile from "../UploadedFile";
import { useNavigate } from "react-router-dom";

const MAXSIZE = 104857600

const UploadDocument = () => {
  const navigate = useNavigate();
  const [document, setDocument] = useState(null);
  const [isDropped, setIsDropped] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length === 1) {
      setDocument(acceptedFiles[0]);
    }
    setIsDropped(true);
  }, []);

  const onDropRejected = useCallback((fileRejections, event) => {
    setIsDropped(false);
    toast.error(fileRejections[0].errors[0].message);
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

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      multiple: false,
      onDropRejected,
      validator: fileValidator,
      accept: { "text/csv": [".csv"] },
    });

  const showToast = () => {
    toast.success("File uploaded successfully to blockchain");
  };

  return (
    <>
      <ToastContainer />

      <div className="w-full h-full px-4 fixed flex justify-center items-center z-50">
        <div className="fixed inset-0 bg-dark bg-opacity-50" />
        <div className="h-auto w-full md:w-auto">
          <div className="relative bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all w-fit min-h-full ">
            <div className="bg-white">
              <div className="px-4 py-3.5 relative flex items-center">
                <h1 className="text-xl font-semibold text-color8 -mt-0.5">
                  Charger Diplôme
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

              <div className="px-8 py-8 w-full relative">
                <div className="z-20 relative bg-color11 border border-gray-200 w-760 h-full p-8 rounded-3xl m-auto flex flex-col items-center justify-center ">
                  <div
                    className={`border-2 border-dotted bg-white w-full h-full rounded-xl ${
                      isDragActive ? "border-color5" : "border-gray-200"
                    }`}
                  >
                    <div
                      className="flex items-center flex-col w-full h-full focus:outline-0 space-y-10 py-6"
                      {...getRootProps()}
                    >
                      <input
                        {...getInputProps()}
                        // accept=".pdf"
                        multiple={false}
                        type="file"
                        className="hidden w-full h-full"
                      />
                      <div className="bg-color4 border-4 border-stroke1 rounded-full w-24 h-24 flex items-center justify-center">
                        <Upload className="w-9 h-9 stroke-stroke1" />
                      </div>
                      <div className="text-0base text-center flex flex-col">
                        <p className="text-color6">
                          <span className="text-color5 cursor-pointer">
                            Cliquez pour parcourir le fichier 
                          </span>{" "}
                          ou faites glisser et déposez
                        </p>
                        <p className="text-color6">
                          votre fichier ici pour commencer à le chargement.  (Format: .csv)
                        </p>
                      </div>
                    </div>
                  </div>

                  {isDropped && (
                    <UploadedFile
                      document={document}
                      acceptedFiles={acceptedFiles}
                      isDropped={setIsDropped}
                      showToast={showToast}
                    />
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

export default UploadDocument;
