import { FaArrowRight } from "react-icons/fa"

export function CustomerRoute() {
  return (
    <div>
      <h2 className="text-2xl font-extrabold">Route</h2>
      <p className="flex items-center gap-1 text-lg font-semibold">
        Amsterdam <FaArrowRight className="text-blue-600" /> Dusseldorf
      </p>
    </div>
  )
}
