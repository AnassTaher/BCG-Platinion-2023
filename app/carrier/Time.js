import { FaClock, FaExclamationTriangle } from "react-icons/fa"

export function Time({start, end}) {
  return (
    <>
      <div className="flex items-center">
        <FaClock className="text-gray-500 mr-1" />
        <p className="mb-0">{start} - {end  }</p>
      </div>
      <div className="flex items-center">
        <FaExclamationTriangle className="text-red-500 mr-1" />
        <p className="mb-0">Delay: 30 min</p>
      </div>
    </>
  )
}
