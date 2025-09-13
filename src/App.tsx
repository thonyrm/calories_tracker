import Form from "@/components/Form"
import { useReducer } from "react"
import { activityReducer, initalState } from "@/reducers/activity-reducer"

function App() {
  const [state, dispatch] = useReducer(activityReducer, initalState)


  return (
    <>
      <header className="bg-sky-800 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-white font-bold text-lg uppercase">Contador de Calorias</h1>
          <button className="bg-sky-900 text-white hover:bg-sky-950 p-2 font-bold uppercase cursor-pointer rounded-lg ">Reset</button>
        </div>
      </header>

      <section className="bg-sky-600 py-20 px-5">
        <div className="max-w-4xl mx-auto ">
          <Form
            dispatch = {dispatch}
          />
        </div>
      </section>
    </>
  )
}

export default App
