import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment } from "../utils/formSlice"

const FinishUp = () => {
  const counts = useSelector((store) => store.form.count)
  const dispatch = useDispatch()

  useEffect(() => {
    changeCount()
  }, [counts])

  const changeCount = () => {
    dispatch(increment(4))
  }
  return (
    <div>
      <div className="font-bold text-xl text-blue-900">Finishing up</div>
      <div className="font-semibold  text-gray-600">
        Double check everything looks OK before confirming.
      </div>
      <div className="p-3 py-8 bg-gray-100 mt-4">
        <div className="font-bold text-xl text-blue-900">Arcade(Monthly)</div>
        <div className="flex justify-between border pb-5 border-b-gray-400">
          <div className="decoration-gray-500 text-gray-600 underline text-xl font-semibold">
            change
          </div>
          <div className="font-bold text-xl text-blue-900">$9/mo</div>
        </div>

        <div className="flex justify-between mt-2">
          <div className="text-xl font-semibold text-gray-600 ">
            Online service
          </div>
          <div className="text-xl text-blue-900 font-semibold">+$1/mo</div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="text-xl font-semibold text-gray-600 ">
            Larger storage
          </div>
          <div className="text-xl text-blue-900 font-semibold">+$2/mo</div>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="text-xl font-semibold text-gray-600 ">
          Total(per month)
        </div>
        <div className="text-xl text-blue-900 font-semibold">+$12/mo</div>
      </div>
    </div>
  )
}
export default FinishUp
