
export function CustomerStops({delay, time, from, to}) {


  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-bold mb-2">Stops</h2>
      <p className="text-lg pl-2">
        Current: <span className="font-semibold">{from}</span>
      </p>
      <p className="text-lg pl-2">
        Destination: <span className="font-semibold">{to}</span>
      </p>
      <p className="text-lg pl-2">
        Arrival: <span className="font-semibold" style={{
          color: delay ? "rgb(220 38 38)" : "black",
          fontWeight: delay ? "900" : "500",
          fontSize: delay ? "22px" : "16px"
        }}>{time}</span>
      </p>
    </div>
  )
}
