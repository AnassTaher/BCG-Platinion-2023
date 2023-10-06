import { FaExclamationTriangle } from 'react-icons/fa'

export function CustomerStops() {


  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-bold mb-2">Stops</h2>
      <p className="text-lg pl-2">
        Current: <span className="font-semibold">Amsterdam</span>
      </p>
      <p className="text-lg pl-2">
        Next: <span className="font-semibold">Utrecht</span>
      </p>
      <p className="text-lg pl-2">
        Destination: <span className="font-semibold">Dusseldorf</span>
      </p>
      <p className="text-lg pl-2">
        Arrival: <span className="font-semibold">11:05</span>
      </p>
      <div className="flex items-center gap-1 justify-center p-2">
        <FaExclamationTriangle className="text-red-500 mr-1" />
        <p className="mb-0 text-3xl text-red-600">+30 min</p>
      </div>
    </div>
  )
}
