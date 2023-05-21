import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment } from "../utils/formSlice"

const Pickaddons = () => {
  const [online, setOnline] = useState(false)
  const [larger, setLarger] = useState(false)
  const [customize, setCustomize] = useState(false)

  const counts = useSelector((store) => store.form.count)
  const dispatch = useDispatch()

  useEffect(() => {
    changeCount()
  }, [counts])

  const changeCount = () => {
    dispatch(increment(3))
  }
  return (
    <div>
      <div className="font-bold text-xl text-blue-900">Pic add-ons</div>
      <div className="font-semibold  text-gray-600">
        Add-ons help enhance your gaming experience
      </div>
      <div
        className={
          online
            ? "p-2 border border-blue-600 w-[100%] rounded-md mt-4 flex justify-between"
            : "p-2 border border-gray-400 w-[100%] rounded-md mt-4 flex justify-between"
        }
      >
        <div className="flex w-[100%]">
          <div>
            <input
              type="checkbox"
              name="gender"
              onChange={(e) =>
                e.target.checked ? setOnline(true) : setOnline(false)
              }
            />
          </div>
          <div className="flex ml-2 justify-between w-[100%]">
            <div>
              <div className="font-bold text-blue-900">Online Service</div>
              <div className="font-semibold text-sm text-gray-600">
                Access to multiplayer games
              </div>
            </div>
            <div className="text-blue-600">$1/mo</div>
          </div>
        </div>
      </div>
      <div
        className={
          larger
            ? "p-2 border border-blue-600 rounded-md mt-4 flex w-[100%]"
            : "p-2 border border-gray-400 rounded-md mt-4 flex w-[100%]"
        }
      >
        <div className="flex w-[100%]">
          <div>
            <input
              type="checkbox"
              name="gender"
              onChange={(e) =>
                e.target.checked ? setLarger(true) : setLarger(false)
              }
            />
          </div>

          <div className="flex ml-2 w-[100%] justify-between">
            <div>
              <div className="font-bold text-blue-900">Larger storage</div>
              <div className="font-semibold text-sm text-gray-600">
                Extra 1TB of cloud save
              </div>
            </div>
            <div className="text-blue-600 text-end flex justify-end">
              <div className="">$2/mo</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          customize
            ? "p-2 border border-blue-600 rounded-md mt-4 flex justify-between w-[100%]"
            : "p-2 border border-gray-400 rounded-md mt-4 flex justify-between w-[100%]"
        }
      >
        <div className="flex w-[100%]">
          <div>
            <input
              type="checkbox"
              name="gender"
              onChange={(e) =>
                e.target.checked ? setCustomize(true) : setCustomize(false)
              }
            />
          </div>
          <div className="flex ml-2  w-[100%] justify-between ">
            <div>
              <div className="font-bold text-blue-900">
                Customizable profile
              </div>
              <div className="font-semibold text-sm text-gray-600">
                Custom theme on your profile
              </div>
            </div>
            <div className="text-blue-600">$2/mo</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Pickaddons
