import React from "react"
import { FaArrowRight, FaTrain } from "react-icons/fa"

export function TrainHeading() {
  return (
    <>
      <div className="text-xl font-semibold mb-2 flex gap-1 items-center">
        <FaTrain className="text-gray-500 mr-1" />
        Train
      </div>
      <div className="text-lg font-semibold flex gap-2 items-center">
          <p>Amsterdam</p>
          <FaArrowRight className="text-blue-600" />
          <p>Dusseldorf</p>
      </div>
    </>
  )
}
