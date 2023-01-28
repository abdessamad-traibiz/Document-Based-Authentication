import React, { useState } from 'react'
import { ReactComponent as UploadLogo } from "../assets/icons/upload.svg";
import { ReactComponent as CsvIcon } from "../assets/icons/csvIcon.svg";

import { AddStudent, hashQrCode } from "../Utils/Web3Client";
import { Oval } from "react-loader-spinner";
import Papa from "papaparse";
import QRCode from 'qrcode';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const UploadedFile = ({ document, acceptedFiles, isDropped, showToast }) => {
  const [pending, setPending] = useState(false);

  const readCSVFile = () => {
    Papa.parse(acceptedFiles[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        uploadData(results.data)
      },
    });
  }

  const uploadData = (data) => {
    setPending(true)
    setTimeout(async () => {
      /* Adding the user address to the data array. */
      data.map((item, index) => (
        item.owner = localStorage.getItem("authDocUser")
      ))
      console.log(data)

      AddStudent(data)
        .then((tx) => {
          let images = [];

          data.map((item, index) => (
            QRCode.toDataURL(hashQrCode(item.idDip))
            .then(url => {
              // setImages(oldImages => [...oldImages, url])
              images.push(url);
            })
            .catch(err => {
              console.error(err);
            })
          ))

          /* Downloading the QR codes generated from the CSV file. */
          downloadQrCode(images);
          showToast()
      }).catch((err) => {
        console.log(err);
      })
      
      setPending(false)
    }, 3000);
  }
  
  const downloadQrCode = (images) => {
    setTimeout(async () => {
      const zip = new JSZip();
      
      for(let file = 0; file < images.length; file++) {
        var url = images[file]
        var idx = url.indexOf('base64,') + 'base64,'.length; 
        var content = url.substring(idx);
        zip.file(`qrCodes_${file+1}.png`, content, {base64: true});
      }
  
      zip.generateAsync({type: "blob"}).then(content => {
        saveAs(content, "qrCodes_list.zip");
      });

      isDropped(false)
    }, 2000);
  }

  return (
    <div className="group mt-4 bg-white border border-gray-200 rounded-2xl w-full h-full py-3 px-6 flex items-center justify-start relative">
      <CsvIcon className="w-11 h-11 bg-color7 p-2.5 rounded-2xl"/>
      <div className="flex items-start flex-col pl-6">
        <div className="text-color2 opacity-100 text-2lg">
          {document.path}
        </div>
        <div className="mt-1 text-Unselected opacity-100 text-0base">
          {document.size + " bytes"}
        </div>
      </div>
      
      <div onClick={readCSVFile} className="flex border border-gray-300 bg-color4 p-2 w-10 h-10 absolute right-4 rounded-xl items-center justify-center transition-all duration-500 ease-in-out hover:shadow-sm cursor-pointer">
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
              <UploadLogo className='stroke-color5'/>
            )
          }
        </div>
    </div>
  )
}

export default UploadedFile