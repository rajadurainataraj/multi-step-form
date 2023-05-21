import logo from "./logo.svg"
import "./App.css"
import PersonalInfo from "./component/PersonalInfo"
import SelectPlan from "./component/SelectPlan"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import { createRoot } from "react-dom/client"
import ReactDOM from "react-dom/client"
import Personal from "./component/Personal"
import Pickaddons from "./component/Picaddons"
import FinishUp from "./component/FinishUp"
import Thankyou from "./component/Thankyou"
import { store } from "./utils/store"
import { Provider } from "react-redux"

const routers = createBrowserRouter([
  {
    path: "/",
    element: <PersonalInfo />,
    children: [
      {
        path: "/",
        element: <Personal />,
      },
      {
        path: "/personal",
        element: <Personal />,
      },
      {
        path: "/selectplan",
        element: <SelectPlan />,
      },
      {
        path: "/picaddons",
        element: <Pickaddons />,
      },
      {
        path: "/finishup",
        element: <FinishUp />,
      },
      {
        path: "/thankyou",
        element: <Thankyou />,
      },
    ],
  },

  // },
])
const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
  )
}

export default App
// ReactDOM.createRoot(document.getElementById("root")).render(router)
