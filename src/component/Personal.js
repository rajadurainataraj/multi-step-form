import { useEffect } from "react"
import { increment } from "../utils/formSlice"
import { useDispatch, useSelector } from "react-redux"

const Personal = () => {
  const counts = useSelector((store) => store.form.count)

  const dispatch = useDispatch()

  useEffect(() => {
    changeCount()
  }, [counts])

  const changeCount = () => {
    dispatch(increment(1))
  }
  return (
    <div>
      <div className="text-2xl font-bold text-blue-900"> Personal info</div>
      <div className="text-sm font-semibold text-gray-600">
        Please provide your name,email,address and phone number
      </div>

      <form className="flex flex-col ">
        <label className="text-start text-sm text-[#102c2c] mt-2">Name:</label>
        <input
          type="text"
          placeholder="eg.stephen king"
          className="border brder-gray-400 rounded-sm p-2 mb-2"
        />
        <label className="text-start text-sm text-[#102c2c]">
          Email Address:
        </label>
        <input
          type="text"
          placeholder="eg.stephenking@lorm.com"
          className="border brder-gray-400 rounded-sm p-2 mb-2"
        />
        <label className="text-start text-sm text-[#102c2c]">
          Phone Number:
        </label>
        <input
          type="text"
          placeholder="eg.+91 989765587"
          className="border brder-gray-400 rounded-sm p-2 mb-3"
        />
      </form>
    </div>
  )
}

export default Personal
