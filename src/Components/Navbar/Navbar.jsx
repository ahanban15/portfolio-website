import React from 'react'
import "./navbar.scss"
import { motion } from 'framer-motion'
import Sidebar from '../Sidebar/Sidebar'

const Navbar = () => {
    
  return (
    <div className='navbar'>
      <Sidebar/>
        <div className="wrapper">
            <motion.span
            initial={{opacity:0, scale:0.5}}
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}>
                Ahan Bandyopadhyay</motion.span>
            <div className="social">
                <a href="http://"><img src="/facebook.png" alt="" /></a>
                <a href="http://"><img src="/instagram.png" alt="" /></a>
                <a href="http://"><img src="/youtube.png" alt="" /></a>
                <a href="http://"><img src="/dribbble.png" alt="" /></a>
            </div>
        </div>
        {/* {sidebar} */}
    </div>
  )
}

export default Navbar