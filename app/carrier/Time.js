import { FaClock, FaExclamationTriangle } from "react-icons/fa"

export function Time() {
  return (
    <>
      <div className="flex items-center">
        <FaClock className="text-gray-500 mr-1" />
        <p className="mb-0">11:50 - 13:50</p>
      </div>
      <div className="flex items-center">
        <FaExclamationTriangle className="text-red-500 mr-1" />
        <p className="mb-0">Delay: 2hours</p>
      </div>
    </>
  )
}
