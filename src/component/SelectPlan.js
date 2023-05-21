import arcade_img from "../assets/images/icon-arcade.svg"
import advanced_img from "../assets/images/icon-advanced.svg"
import pro_img from "../assets/images/icon-pro.svg"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment } from "../utils/formSlice"
const SelectPlan = () => {
  const [isMonth, setIsMonth] = useState(true)
  const dispatch = useDispatch()
  const count = useSelector((store) => store.form.increment)
  useEffect(() => {
    dispatch(increment(2))
  }, [])

  return (
    <div>
      <div className="font-bold text-2xl text-[#103053] mb-1">
        Select your plan
      </div>
      <div className="font-semibold text-lg text-gray-400">
        You have the option of monthly or yearly billing
      </div>
      <div>
        <div className="p-5 border border-gray-400 rounded-md mt-2 flex">
          <img src={arcade_img} alt="arcade img" className="" />
          <div className="ml-2">
            <div className="text-[#103053] font-bold">Arcade</div>

            {isMonth ? (
              <div className="text-gray-600 font-semibold">₹9/mo</div>
            ) : (
              <div>
                <div className="text-gray-600 font-semibold">₹90/yr</div>
                <div className="text-gray-600 font-semibold">2 months free</div>
              </div>
            )}
          </div>
        </div>
        <div className="p-5 border border-gray-400 rounded-md mt-2 flex">
          <img src={advanced_img} alt="arcade img" className="" />
          <div className="ml-2">
            <div className="text-[#103053] font-bold">Addvanced</div>

            {isMonth ? (
              <div className="text-gray-600 font-semibold">₹12/mo</div>
            ) : (
              <div>
                <div className="text-gray-600 font-semibold">₹120/yr</div>
                <div className="text-gray-600 font-semibold">2 months free</div>
              </div>
            )}
          </div>
        </div>
        <div className="p-5 border border-gray-400 rounded-md mt-2 flex">
          <img src={pro_img} alt="arcade img" className="" />
          <div className="ml-2">
            <div className="text-[#103053] font-bold">Pro</div>
            {isMonth ? (
              <div className="text-gray-600 font-semibold">₹15/mo</div>
            ) : (
              <div>
                <div className="text-gray-600 font-semibold">₹150/yr</div>
                <div className="text-gray-600 font-semibold">2 months free</div>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="flex p-3 border border-gray-400 rounded-md mt-2">
            <div>Monthly</div>
            <div
              className={
                isMonth
                  ? "border border-gray-500 p-1 w-12 rounded-full bg-blue-900 mx-2 flex items-end justify-start "
                  : "border border-gray-500 p-1 w-12 rounded-full bg-blue-900 mx-2 flex items-end justify-end"
              }
            >
              <div
                onClick={() => setIsMonth(!isMonth)}
                className="p-2 rounded-full bg-white"
              ></div>
            </div>
            <div>Yearly</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SelectPlan
