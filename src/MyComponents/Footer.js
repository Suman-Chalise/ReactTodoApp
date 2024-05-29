// I have just type rafc and below appear because we have installed ES7

import React from 'react'

const Footer = () => {

  let footerStyle = {
   position:"relative",
   top: "10vh",
   width: "100%",
  }

  return (
    <div className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'>Copyright &copy; mytodos.com</p>
       
    </div>
  )
}

export default Footer





