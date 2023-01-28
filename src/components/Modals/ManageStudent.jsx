import React, { useRef, useState } from "react";
import Divider from "../Divider";
import NouriAimene from "../../assets/images/1.png";
import { verifyDocument, getStudentInfo, updateStudentInfo } from "../../Utils/Web3Client";

import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import ScanQRcode from "../ScanQRcode";
import QrScanner from "qr-scanner";
import VerifiedFile from "../VerifiedFile";
import { toast, ToastContainer } from "react-toastify";

const ManageStudent = () => {
  const initialStudent = {
    id_dip: "",
    cin: "",
    diploma: "",
    studentName: "",
    cne: "",
    image: null,
  };
  const myRef = useRef(null);
  const navigate = useNavigate();
  const [Id, setId] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [status, setStatus] = useState(false);
  const [pending, setPending] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [studentInfo, setStudentInfo] = useState(initialStudent);

  const verify = () => {
    if (Id === "") return toast.warning("Veuillez saisir Id du diplome");

    verifyDocument(Id)
      .then((result) => {
        if (result) {
          getStudentInfo(Id).then((data) => {
            setStudentInfo({
              id_dip: data[0],
              cin: data[1],
              diploma: data[2],
              studentName: data[3],
              cne: data[4],
              image: data[5],
            });
          });
          
        }
        setStatus(result); 
      })
    setPending(true);
    setTimeout(() => {
      setPending(false);
      setIsVerified(true);
    }, 2000);

    myRef.current.scrollIntoView();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo({ ...studentInfo, [name]: value });};

  const handleImageChange = (e) => {
    setStudentInfo({ ...studentInfo, image: e.target.files[0] });
  }

  const submitForm = (e) => {
    e.preventDefault()

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      updateStudentInfo(studentInfo.id_dip, studentInfo.cin, studentInfo.diploma, studentInfo.studentName, studentInfo.cne, studentInfo.image)
      .then(() => toast.success("Etudiant modifie avec succes"))
    }, 2000);
  }

  return (
    <>
      <ToastContainer />
      <div className="w-full h-full py-10 fixed flex justify-center items-center z-50">
        <div className="fixed inset-0 bg-dark bg-opacity-50" />
        <div className="h-auto w-full md:w-11/12">
          <div className="relative bg-white rounded-xl overflow-hidden text-left shadow-xl transform transition-all w-full h-full">
              <div className="px-4 py-3.5 relative flex items-center bg-white backdrop-filter backdrop-blur-sm bg-opacity-70">
                <h1 className="text-xl font-semibold text-color8 -mt-0.5">
                  Gérer Etudiant
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

              <div className="px-8 py-8 w-full overflow-y-auto scroll-smooth h-96 md:h-650">
                <div className="z-20 m-auto border border-gray-200 bg-color11 w-2/4 p-6 rounded-3xl">
                  <div className="border border-gray-200 bg-white rounded-xl flex flex-row items-center justify-center w-full h-full">
                    <input
                      type="text"
                      name="IdHash"
                      placeholder="Saisir Id du diplôme"
                      onChange={(e) => setId(e.target.value)}
                      className="bg-white w-full h-full py-5 rounded-xl outline-none px-4 text-base"
                    ></input>
                    <button
                      onClick={verify}
                      className="text-white px-12 py-3.5 bg-color7 rounded-1lg h-full text-1base font-medium mr-0.5 hover:opacity-75 transition-all ease-in-out duration-150"
                    >
                      Verifier
                    </button>
                  </div>
                </div>

                {/* if diploma is found */}
                <div id="verifiedDiv" ref={myRef}>
                  {pending ? (
                    <div className="mt-32 z-20 relative bg-color11 border border-gray-200 w-fit h-fit px-10 py-6 rounded-3xl m-auto">
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
                    isVerified &&
                    (status ? (
                      <div className="overflow-hidden p-4 mt-8 w-full h-650 border border-gray-200 bg-color11 rounded-3xl flex flex-row flex-nowrap justify-between items-stretch space-x-4">
                        <form onSubmit={submitForm} className="relative mt-2 bg-white border border-gray-200 w-7/12 px-2.5 py-4 rounded-xl h-fit flex flex-col space-y-4">
                          <div className="absolute -top-4 bg-gray-50 border border-gray-200 rounded-xl w-fit py-1 px-5">
                            <p className="text-base font-semibold text-color8 ">
                              Details
                            </p>
                          </div>
                          <div className="flex flex-col items-start justify-start space-y-0.5">
                            <p className="text-md font-semibold text-color8">
                              Id Diplôme
                            </p>
                            <input
                              name="id_dip"
                              value={studentInfo.id_dip}
                              onChange={handleChange}
                              placeholder="Id Diplôme"
                              className="outline-none bg-gray-50 border border-gray-200 rounded-lg p-2 w-full text-color8"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start space-y-0.5">
                            <p className="text-md font-semibold text-color8">
                              CIN
                            </p>
                            <input
                              name="cin"
                              value={studentInfo.cin}
                              onChange={handleChange}
                              placeholder="CIN"
                              className="outline-none bg-gray-50 border border-gray-200 rounded-lg p-2 w-full text-color8"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start space-y-0.5">
                            <p className="text-md font-semibold text-color8">
                              Titre du Diplôme
                            </p>
                            <input
                              name="diploma"
                              value={studentInfo.diploma}
                              onChange={handleChange}
                              placeholder="Titre du Diplôme"
                              className="outline-none bg-gray-50 border border-gray-200 rounded-lg p-2 w-full text-color8"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start space-y-0.5">
                            <p className="text-md font-semibold text-color8">
                              Etudiant
                            </p>
                            <input
                              name="studentName"
                              value={studentInfo.studentName}
                              onChange={handleChange}
                              placeholder="Le Nom d'Etudiant"
                              className="outline-none bg-gray-50 border border-gray-200 rounded-lg p-2 w-full text-color8"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start space-y-0.5">
                            <p className="text-md font-semibold text-color8">
                              CNE
                            </p>
                            <input
                              name="cne"
                              value={studentInfo.cne}
                              onChange={handleChange}
                              placeholder="CNE"
                              className="outline-none bg-gray-50 border border-gray-200 rounded-lg p-2 w-full text-color8"
                            />
                          </div>
                          {/* <div className="flex flex-col items-start justify-start space-y-0.5">
                            <p className="text-md font-semibold text-color8">Diplôme</p>
                            <input name="image" type="file" onChange={handleChange} placeholder="Diplôme" className="outline-none bg-gray-50 border border-gray-200 rounded-lg p-2 w-full text-color8" />
                          </div> */}

                          <div className="pt-2">
                            <button 
                              type="submit"
                              className="text-white cursor-pointer px-8 py-2 w-fit bg-color7 rounded-1lg h-full text-1base font-medium mr-0.5 hover:opacity-75 transition-all ease-in-out duration-150"
                            >
                              {submitting ? (
                                  <Oval
                                    height="18"
                                    width="18"
                                    color="#fff"
                                    radius="9"
                                    ariaLabel="loading"
                                    wrapperStyle
                                    wrapperClass
                                  />
                                )
                                :
                                  <p>Enregistrer</p>
                              }
                            </button>
                          </div>
                        </form>
                        <div className="relative group w-full h-full rounded-xl flex items-center justify-center">
                          {/* <button className="absolute text-1base rounded-xl opacity-0 group-hover:opacity-100 z-50 bg-white border border-gray-200 p-4 w-fit">
                            Modifier Diplôme
                          </button>
                          <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-slate-500 opacity-0 group-hover:opacity-25 rounded-xl transition-all ease-in-out duration-200"></div> */}
                          <img
                            src={studentInfo.image}
                            alt=""
                            className="rounded-xl w-full h-full border border-gray-200"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="mt-28 relative bg-color11 text-color8 text-base border border-gray-200 w-fit h-fit px-10 py-6 rounded-3xl m-auto">
                        Aucun Etudiant trouve
                      </div>
                    ))
                  )}
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageStudent;
