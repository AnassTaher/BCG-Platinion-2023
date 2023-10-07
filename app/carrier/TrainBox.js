
import { DropDown } from "./DropDown"
import { Time } from "./Time"
import { TrainHeading } from "./TrainHeading"

export function TrainBox({start, end}) {
  return (
    <div className="bg-blue-300 border border-blue-400 rounded-lg shadow-lg p-8 grid gap-4">
      <TrainHeading />
      <Time start={start} end={end} />
    </div>
  )
}
