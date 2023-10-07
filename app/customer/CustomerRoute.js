import { FaArrowRight } from "react-icons/fa"

export function CustomerRoute({from, to}) {
  return (
    <div>
      <h2 className="text-2xl font-extrabold">Route</h2>
      <p className="flex items-center gap-1 text-lg font-semibold">
        {from} <FaArrowRight /> {to}
      </p>
    </div>
  )
}
