import React from 'react'

const Button = ({label,iconURL ,variant="primary"}) => {
  return (
    
    <button className= { variant==="primary"?
        "rounded-full bg-orange-600 flex justify-centre items-center gap-2 px-7 py-4 text-lg text-white border-orange-500" : "rounded-full flex justify-centre items-center gap-2 px-7 py-4 text-lg text-slate-600 border-2 border-slate-500 "}>
        <p> {label} </p>
        <img src={iconURL} alt="" />
    </button>
  )
}

export default Button