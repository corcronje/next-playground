"use client";
import React, {useState} from 'react'
import { motion } from 'framer-motion'
import '@/styles/switch.css'

function Switch() {
    const [isOn, setIsOn] = useState(false)
    const toggleSwitch = () => setIsOn(!isOn);

    const spring = {
        type: 'spring',
        stiffness: 700,
        damping: 30
    }

  return (
    <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className="handle" layout transition={spring} />
    </div>
  )
}

export default Switch