import React from 'react'

const Divider = ({ mt, borderColor }) => {
  return (
    <div className={`border-t border-solid ${borderColor} rounded-full ${mt}`} />
  )
}

export default Divider