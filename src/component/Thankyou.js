import { useDispatch, useSelector } from "react-redux"
import thankyou_img from "../assets/images/icon-thank-you.svg"
import { useEffect } from "react"
import { increment } from "../utils/formSlice"

const Thankyou = () => {
  const counts = useSelector((store) => store.form.count)
  const dispatch = useDispatch()

  useEffect(() => {
    changeCount()
  }, [counts])

  const changeCount = () => {
    dispatch(increment(5))
  }
  return (
    <div className="pb-10">
      <div className="flex flex-col items-center justify-center">
        <img src={thankyou_img} alt="thankyou_img" />
        <div className="text-2xl font-bold mt-3">Thank you!</div>
      </div>
      <div className="mt-2 text-gray-600 text-[1.4rem]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </div>
    </div>
  )
}
export default Thankyou
