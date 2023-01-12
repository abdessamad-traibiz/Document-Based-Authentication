import React from 'react'
import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <div className="bg-color10 flex flex-row items-center justify-center text-color8 py-6 px-40">
        <div className=''>
            All Rights Reserved AuthDoc. 2022
        </div>

        {/* <div className="flex flex-row items-center justify-center space-x-2">
            <div className="bg-color7 flex items-center justify-center rounded-2xl p-3 cursor-pointer hover:opacity-75 transition-all ease-in-out duration-150">
                <Twitter />
            </div>
            <div className="bg-color7 flex items-center justify-center rounded-2xl p-3 cursor-pointer hover:opacity-75 transition-all ease-in-out duration-150">
                <Linkedin />
            </div>
        </div> */}
    </div>
  )
}

export default Footer