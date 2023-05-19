const PersonalInfo = () => {
  return (
    <div className="flex flex-wrap flex-col">
      <div className="h-52 bg-cover bg-[url('./assets/images/bg-sidebar-mobile.svg')]">
        <div className="h-2/4 flex items-center justify-center text-white sm:[flex]">
          <div className="flex justify-center items-center ">
            <div className="w-8 h-8 mx-3 rounded-full justify-center border border-slate-100 flex  items-center">
              1
            </div>
            {/* <div className="ml-2">
              <div className="text-xs">STEP 1</div>
              <div className="text-sm">YOUR INFO</div>
            </div> */}
          </div>
          <div className="flex justify-center items-center">
            <div className="w-8 h-8 mx-3 rounded-full border border-slate-100 flex justify-center items-center">
              2
            </div>
            {/* <div className="ml-2">
              <div className="text-xs">STEP 2</div>
              <div className="text-sm">SELECT-PLAN</div>
            </div> */}
          </div>
          <div className="flex justify-center items-center">
            <div className="w-8 h-8 mx-3 rounded-full border border-slate-100 flex justify-center items-center">
              3
            </div>
            {/* <div className="ml-2">
              <div className="text-xs">STEP 3</div>
              <div className="text-sm">ADD-ONS</div>
            </div> */}
          </div>
          <div className="flex justify-center items-center">
            <div className="w-8 h-8 mx-3 rounded-full border border-slate-100 flex justify-center items-center">
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
        <div className="text-2xl font-bold text-blue-900"> Personal info</div>
        <div className="text-sm font-semibold text-gray-600">
          Please provide your name,email,address and phone number
        </div>

        <form className="flex flex-col ">
          <label className="text-start text-sm text-[#102c2c] mt-2">
            Name:
          </label>
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
      <div className="bg-blue-100 w-full h-96"></div>
      <div className="flex items-end text-end justify-end m-1">
        <div className="p-1.5 border rounded-md bg-blue-800 text-white font-semibold">
          Next Step
        </div>
      </div>
    </div>
  )
}
export default PersonalInfo
