import { TrainCard } from "../TrainCard"

export default function Page({params}) {


  return (
    <div className="flex justify-center items-center p-4 ">
      <TrainCard id={params.id}/>
    </div>
  )
}
