import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"
import { increment } from "../utils/formSlice"
import { useEffect } from "react"

const PersonalInfo = () => {
  const counts = useSelector((store) => store.form.count)

  const dispatch = useDispatch()

  useEffect(() => {
    changeCount()
  }, [])

  const changeCount = () => {
    dispatch(increment(1))
  }

  const goToPlan = () => {
    if (counts === 1) {
      return "/selectplan"
    } else if (counts === 2) {
      return "/picaddons"
    } else if (counts === 3) {
      return "/finishup"
    } else if (counts === 4) {
      return "/thankyou"
    }
  }
  const goBack = () => {
    if (counts === 2) {
      return "/"
    } else if (counts === 3) {
      return "/selectplan"
    } else if (counts === 4) {
      return "/picaddons"
    }
  }

  return (
    <div className="flex flex-wrap flex-col">
      <div className="h-52 bg-cover bg-[url('./assets/images/bg-sidebar-mobile.svg')]">
        <div className="h-2/4 flex items-center justify-center text-white sm:[flex]">
          <div className="flex justify-center items-center ">
            <div
              className={
                counts === 1
                  ? "bg-blue-400 w-8 h-8 mx-3 rounded-full justify-center border border-slate-100 flex  items-center"
                  : "w-8 h-8 mx-3 rounded-full justify-center border border-slate-100 flex  items-center"
              }
            >
              1
            </div>
            {/* <div className="ml-2">
              <div className="text-xs">STEP 1</div>
              <div className="text-sm">YOUR INFO</div>
            </div> */}
          </div>
          <div className="flex justify-center items-center">
            <div
              className={
                counts === 2
                  ? "bg-blue-400 w-8 h-8 mx-3 rounded-full border border-slate-100 flex justify-center items-center"
                  : "w-8 h-8 mx-3 rounded-full border border-slate-100 flex justify-center items-center"
              }
            >
              2
            </div>
            {/* <div className="ml-2">
              <div className="text-xs">STEP 2</div>
              <div className="text-sm">SELECT-PLAN</div>
            </div> */}
          </div>
          <div className="flex justify-center items-center">
            <div
              className={
                counts === 3
                  ? "bg-blue-400 w-8 h-8 mx-3 rounded-full border border-slate-100 flex justify-center items-center"
                  : "w-8 h-8 mx-3 rounded-full border border-slate-100 flex justify-center items-center"
              }
            >
              3
            </div>
            {/* <div className="ml-2">
              <div className="text-xs">STEP 3</div>
              <div className="text-sm">ADD-ONS</div>
            </div> */}
          </div>
          <div className="flex justify-center items-center">
            <div
              className={
                counts === 4
                  ? "bg-blue-400 w-8 h-8 mx-3 rounded-full border border-slate-100 flex justify-center items-center"
                  : "w-8 h-8 mx-3 rounded-full border border-slate-100 flex justify-center items-center"
              }
            >
              4
            </div>
            {/* <div className="ml-2">
              <div className="text-xs">STEP 4</div>
              <div className="text-sm">SUMMARY</div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="p-[7%] mx-[5%] rounded-md bg-white border absolute top-[7.5rem]">
        <Outlet />
      </div>
      <div className="bg-blue-100 w-full h-[32rem]"></div>
      <div className="flex items-end text-end justify-between m-1">
        <Link to={goBack()}>
          {counts === 1 || counts === 5 ? (
            <div></div>
          ) : (
            <div className="ml-2">Go Back</div>
          )}
        </Link>

        <Link to={goToPlan()}>
          {counts === 4 ? (
            <div
              onClick={() => goToPlan()}
              className="p-1.5 border rounded-md bg-blue-800 text-white font-semibold cursor-pointer"
            >
              Confirm
            </div>
          ) : counts !== 5 ? (
            <div
              onClick={() => goToPlan()}
              className="p-1.5 border rounded-md bg-blue-800 text-white font-semibold cursor-pointer"
            >
              Next Step
            </div>
          ) : (
            ""
          )}
        </Link>
      </div>
    </div>
  )
}
export default PersonalInfo
