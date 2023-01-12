import React, { useEffect, useState } from 'react'

import { ReactComponent as VerifiedIcon } from "../assets/icons/verified_icon.svg";

const VerifiedFile = ({ status }) => {
    return (
        <div className="mt-10 z-20 relative bg-color3 w-560 h-full px-10 py-6 rounded-3xl m-auto">
            <div className="flex flex-row items-center justify-center space-x-3">
                <div className="text-2xl font-semibold text-center">Document is {status ? "verified" : "not verified"}</div>
                {status ?
                    <VerifiedIcon className='w-8 h-8' />
                    :
                    <VerifiedIcon className='w-8 h-8' />
                }
            </div>
        </div>
    )
}

export default VerifiedFile