import React, { useCallback, useState } from "react";
import { ReactComponent as Upload } from "../assets/icons/upload.svg";

import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";

const MAXSIZE = 104857600;

const ScanQRcode = ({ action }) => {
  const [pending, setPending] = useState(false);
  const [preview, setPreview] = useState(null);
  const [qrCode, setQrCode] = useState(null);
  const [isDropped, setIsDropped] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length === 1) {
      const objectUrl = URL.createObjectURL(acceptedFiles[0]);
      setPreview(objectUrl);
      setQrCode(acceptedFiles[0]);
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

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      multiple: false,
      onDropRejected,
      validator: fileValidator,
      accept: { "image/png": [".png"] },
    });

  const readQRCode = () => {
    setPending(true)
    setTimeout(async () => {
      action(qrCode)
      setPending(false)
      setIsDropped(false)
    }, 3000);
  }

  return (
    <>
      <div className="mt-16 text-2xl text-center font-semibold">
        Or scan QR code
      </div>
      <div className="mt-16 z-20 relative bg-color3 w-560 h-full p-10 rounded-3xl m-auto flex flex-col items-center justify-center ">
        <div
          className={`border-2 border-dotted bg-background w-full h-full rounded-xl ${
            isDragActive ? "border-color5" : "border-color3"
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
            <div className="bg-color4 border-4 border-stroke1 rounded-full w-20 h-20 flex items-center justify-center">
              <Upload className="w-9 h-9 stroke-stroke1" />
            </div>
            <div className="text-0base text-center flex flex-col">
              <p className="text-color6">
                <span className="text-color5 cursor-pointer">
                  Click to browse QR code
                </span>{" "}
                or drag and drop
              </p>
              <p className="text-color6">
                your QR code here to start scanning.
              </p>
            </div>
          </div>
        </div>

        {isDropped && 
          <div className="group mt-4 bg-background rounded-2xl w-full h-full py-5 px-6 flex flex-row space-x-7 items-center justify-center relative">
            <img src={preview} alt="" className="w-44 h-44" />
            <div onClick={readQRCode} className="flex border border-gray-300 bg-color4 py-2 px-6 w-fit h-10 mt-7 rounded-xl items-center justify-center transition-all duration-500 ease-in-out hover:shadow-sm cursor-pointer">
              {pending ?
                (
                  <Oval
                    height="24"
                    width="24"
                    color="#8054FF"
                    radius="9"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                  />
                )
              : 
                (
                  <p className="text-color5 text-1base">Scan QrCode</p>
                )
              }
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default ScanQRcode;
