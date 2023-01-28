import React, { Fragment, useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { AuthContext } from "../contexts/Auth";
import { ReactComponent as Logo } from "../assets/icons/favicon.svg";
import { ReactComponent as Beta } from "../assets/icons/Beta.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import { ReactComponent as UserIcon } from "../assets/icons/user_icon.svg";
import UploadIcon from "./icons/UploadIcon";
import VerifiedIcon from "./icons/VerifiedIcon";
import DownloadIcon from "./icons/DownloadIcon";
import ManageIcon from "./icons/ManageIcon";
import AboutIcon from "./icons/AboutIcon";
import LogoutIcon from "./icons/LogoutIcon";
import Divider from "./Divider";

const Navbar = () => {
  const { state: ContextState, login, logout } = useContext(AuthContext);
  const { isAuthenticated } = ContextState;
  const [open, setOpen] = useState(false);
  const [isAboutHovering, setIsAboutHovering] = useState(false);
  const [isUploadHovering, setIsUploadHovering] = useState(false);
  const [isDownloadHovering, setIsDownloadHovering] = useState(false);
  const [isVerifiedHovering, setIsVerifiedHovering] = useState(false);
  const [isManageHovering, setIsManageHovering] = useState(false);
  const [isLogoutHovering, setIsLogoutHovering] = useState(false);
  const location = useLocation();

  const logoutWallet = () => {
    logout();
  };

  return (
    <div className="select-none text-color2 md:px-20 xl:px-40 h-16 w-full relative z-50">
      <div className="mx-auto h-20 px-3 md:px-6 lg:px-8 flex flex-row items-center justify-between">
        <div className="flex items-center justify-center space-x-3">
          <Link to="/" className="flex items-center justify-center space-x-2">
            <Logo className="w-8 h-8 stroke-black" />
            <p className="text-3xl font-bold">AuthDoc.</p>
          </Link>
          <Beta className="w-11 h-11 -mt-0" />
        </div>
        <div className="flex flex-row items-center justify-center text-Unselected space-x-6 text-base h-full">
          {isAuthenticated ? (
            <>
              <Menu as={"div"} className="relative">
                <Menu.Button
                  onClick={() => setOpen(!open)}
                  className="bg-white border-gray-200 border px-3 py-2 text-color1 cursor-pointer rounded-xl hover:opacity-80 transition-all duration-150 ease-in-out flex items-center justify-between space-x-3.5"
                >
                  <MenuIcon className="w-5 h-5" />
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-sm bg-background text-color1">
                    <UserIcon />
                  </div>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                  afterLeave={() => setOpen(!open)}
                >
                  <Menu.Items className="z-20 absolute right-0 w-62 mt-1.5 bg-white border border-gray-200 rounded-xl focus:outline-0 py-2">
                    <Link to="/upload-document">
                      <div className="px-3 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onMouseOut={() => setIsUploadHovering(false)}
                              onMouseOver={() => setIsUploadHovering(true)}
                              className={`${
                                location.pathname === "/upload-document"
                                  ? "bg-gray-50"
                                  : " bg-white"
                              } group flex w-full items-center rounded-md px-2.5 py-2.5 space-x-4
                              ${
                                active
                                  ? "bg-gray-50"
                                  : " bg-white"
                              }`}
                            >
                              <div className="bg-white border border-gray-200 p-1.5 rounded-lg">
                                <UploadIcon
                                  selected={
                                    location.pathname === "/upload-document"
                                      ? true
                                      : false
                                  }
                                  isHovering={isUploadHovering}
                                />
                              </div>
                              <p className={`${active ? "text-color7" : "text-color8"} 
                                ${location.pathname === "/upload-document" ? "text-color7" : "text-color8"} text-base font-medium`}
                              >
                                Charger Document
                              </p>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Link>
                    <Link to="/verify-document">
                      <div className="px-3 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                            onMouseOut={() => setIsVerifiedHovering(false)}
                            onMouseOver={() => setIsVerifiedHovering(true)}
                            className={`${
                              location.pathname === "/verify-document"
                                ? "bg-gray-50"
                                : " bg-white"
                            } group flex w-full items-center rounded-md px-2.5 py-2.5 space-x-4
                            ${
                              active
                                ? "bg-gray-50"
                                : " bg-white"
                            }`}
                          >
                            <div className="bg-white border border-gray-200 p-1.5 rounded-lg">
                              <VerifiedIcon
                                selected={
                                  location.pathname === "/verify-document"
                                    ? true
                                    : false
                                }
                                isHovering={isVerifiedHovering}
                              />
                            </div>
                              <p className={`${active ? "text-color7" : "text-color8"} 
                                ${location.pathname === "/verify-document" ? "text-color7" : "text-color8"} text-base font-medium`}
                              >
                                Vérifier Diplôme
                              </p>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Link>
                    <Link to="/download-document">
                      <div className="px-3 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                            onMouseOut={() => setIsDownloadHovering(false)}
                            onMouseOver={() => setIsDownloadHovering(true)}
                            className={`${
                              location.pathname === "/download-document"
                                ? "bg-gray-50"
                                : " bg-white"
                            } group flex w-full items-center rounded-md px-2.5 py-2.5 space-x-4
                            ${
                              active
                                ? "bg-gray-50"
                                : " bg-white"
                            }`}
                          >
                            <div className="bg-white border border-gray-200 p-1.5 rounded-lg">
                              <DownloadIcon
                                selected={
                                  location.pathname === "/download-document"
                                    ? true
                                    : false
                                }
                                isHovering={isDownloadHovering}
                              />
                            </div>
                              <p className={`${active ? "text-color7" : "text-color8"} 
                                ${location.pathname === "/download-document" ? "text-color7" : "text-color8"} text-base font-medium`}
                              >
                                télécharger Diplôme
                              </p>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Link>

                    <div className="mt-2 mb-3">
                      <Divider mt={"mt-0"} borderColor="border-gray-200" />
                    </div>

                    <Link to="/manage-student">
                      <div className="px-3 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                            onMouseOut={() => setIsManageHovering(false)}
                            onMouseOver={() => setIsManageHovering(true)}
                            className={`${
                              location.pathname === "/manage-student"
                                ? "bg-gray-50"
                                : " bg-white"
                            } group flex w-full items-center rounded-md px-2.5 py-2.5 space-x-4
                            ${
                              active
                                ? "bg-gray-50"
                                : " bg-white"
                            }`}
                          >
                            <div className="bg-white border border-gray-200 p-1.5 rounded-lg">
                              <ManageIcon
                                selected={
                                  location.pathname === "/manage-student"
                                    ? true
                                    : false
                                }
                                isHovering={isManageHovering}
                              />
                            </div>
                            <p className={`${active ? "text-color7" : "text-color8"} 
                                ${location.pathname === "/manage-student" ? "text-color7" : "text-color8"} text-base font-medium`}
                            >
                                Gérer Etudiant
                              </p>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Link>

                    <div className="mt-2 mb-3">
                      <Divider mt={"mt-0"} borderColor="border-gray-200" />
                    </div>

                    <Link to="/about">
                      <div className="px-3 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onMouseOut={() => setIsAboutHovering(false)}
                              onMouseOver={() => setIsAboutHovering(true)}
                              className={`${
                                location.pathname === "/about"
                                  ? "bg-gray-50"
                                  : " bg-white"
                              } group flex w-full items-center rounded-md px-2.5 py-2.5 space-x-4
                              ${
                                active
                                  ? "bg-gray-50"
                                  : " bg-white"
                              }`}
                            >
                              <div className="bg-white border border-gray-200 p-1.5 rounded-lg">
                                <AboutIcon
                                  selected={
                                    location.pathname === "/about"
                                      ? true
                                      : false
                                  }
                                  isHovering={isAboutHovering}
                                />
                              </div>
                              <p className={`${active ? "text-color7" : "text-color8"} 
                                ${location.pathname === "/about" ? "text-color7" : "text-color8"} text-base font-medium`}
                              >
                                A propos
                              </p>
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Link>
                    <div
                      onClick={logoutWallet}
                      className="px-3 py-1 opacity-60"
                    >
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-color4" : " bg-white"
                            } group flex w-full items-center rounded-md px-2.5 py-2.5 space-x-4`}
                          >
                            <div className="bg-white border border-gray-200 p-1.5 rounded-lg">
                                <LogoutIcon
                                  isHovering={isLogoutHovering}
                                />
                            </div>
                            <p className="text-base font-medium text-color8">
                              Se déconnecter
                            </p>
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </>
          ) : (
            <>
              <Link
                to="/"
                className={`hover:text-color2 transition-all duration-150 ease-in-out
                                ${
                                  location.pathname === "/" ? "text-color2" : ""
                                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`hover:text-color2 transition-all duration-150 ease-in-out 
                                ${
                                  location.pathname === "/about"
                                    ? "text-color2"
                                    : ""
                                }`}
              >
                A propos
              </Link>
              <Link
                to="/verify"
                className={`hover:text-color2 transition-all duration-150 ease-in-out 
                                ${
                                  location.pathname === "/verify"
                                    ? "text-color2"
                                    : ""
                                }`}
              >
                Verifier
              </Link>
              <Link
                to="/login"
                className="bg-color7 px-4 py-2 text-white cursor-pointer rounded-lg hover:opacity-80 transition-all duration-150 ease-in-out"
              >
                Se Connecter
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
