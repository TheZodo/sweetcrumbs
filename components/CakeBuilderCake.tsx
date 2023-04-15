'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function CakeBuilderCake() {
  const [width, setWidth] = useState(200)
  const [height, setHeight] = useState(200)
  const [shape, setShape] = useState('circle')

  const handleShapeChange = (event: any) => {
    setShape(event.target.value)
  }

  return (
    <div className="">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width={width}
        height={height}
      >
        {shape === 'circle' ? (
          <motion.div
            // width="40"
            // height="40"
            // fill="#f00"
            className={'bg-[#4A1823]'}
            animate={{
              scale: [1, 2, 1],
              rotate: [0, 180, 360],
              //   borderRadius: ['20%', '50%', '20%'],
            }}
            transition={{ duration: 2 }}
          />
        ) : (
          <motion.div
            // className="bg-[#4A1823]"
            className="box"
            animate={{
              scale: [1, 2, 1],
              rotate: [0, 180, 360],
              borderRadius: ['20%', '50%', '20%'],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
          />
        )}
      </motion.svg>
      <select
        value={shape}
        onChange={handleShapeChange}
        className="px-8 bg-slate-500 py-3 mb-14"
      >
        <option value="circle">Circle</option>
        <option value="square">Square</option>
      </select>
    </div>
  )
}
