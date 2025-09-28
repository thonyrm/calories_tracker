import { useEffect, useMemo, useReducer  } from "react"
import Form from "@/components/Form"
import ActivityList from "@/components/ActivityList"
import CalorieTracker from "@/components/CalorieTracker"
import { useActivity } from "./hooks/useActivity"

function App() {

  const {state , dispatch } = useActivity()

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  },[state.activities])

  const canRestartApp = () => useMemo(() => state.activities.length > 0, [state.activities])

  return (
    <>
      <header className="bg-sky-800 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-white font-bold text-lg uppercase">Contador de Calorias</h1>
          <button 
            className="bg-sky-900 text-white hover:bg-sky-950 p-2 font-bold uppercase cursor-pointer rounded-lg text-sm disabled:opacity-10"
            disabled = {!canRestartApp()}
            onClick={() => dispatch({type:'restart-app'})}
          >
            Reset
          </button>
        </div>
      </header>

      <section className="bg-sky-600 py-20 px-5">
        <div className="max-w-4xl mx-auto ">
          <Form  />
        </div>
      </section>
      <section className="bg-sky-950 py-10">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker/>
        </div>

      </section>
      <section className="p-10 mx-auto maxx-w-4xl">
        <ActivityList />
      </section>
    </>
  )
}

export default App
